import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'
import { InvalidCredentialsError } from '@/use-cases/errors/invalid-credentials-error'
import { makeAuthenticateUseCase } from '@/use-cases/factories/make-authenticate-use-case'

export async function authenticateController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    if (!request.body) {
      return reply
        .status(400)
        .send({ message: 'Dados inválidos para a requisição.' })
    }

    const authenticateBodySchema = z.object({
      email: z.string().email(),
      password: z.string().min(6, 'Password é obrigatório.'),
    })

    const { email, password } = authenticateBodySchema.parse(request.body)

    const authenticateUseCase = makeAuthenticateUseCase()

    const { user } = await authenticateUseCase.execute({
      email,
      password,
    })

    const token = await reply.jwtSign(
      {
        user_name: user.name, // para fins de testes, como passar infos do usuário, somente dados que NÃO são sensíveis
      },
      {
        sign: {
          sub: user.id,
        },
      },
    )

    return reply.status(200).send({
      token,
    })
  } catch (error) {
    if (error instanceof InvalidCredentialsError) {
      return reply.status(400).send({ message: error.message })
    }

    if (error instanceof z.ZodError) {
      const formattedError = error.errors.map((err) => ({
        field: err.path[0],
        message: err.message,
      }))
      return reply.status(400).send({
        message: 'Erro de validação.',
        error: formattedError,
      })
    }

    throw error
  }
}
