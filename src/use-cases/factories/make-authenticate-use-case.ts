import { UsersRepositoryPrisma } from '@/repositories/prisma/users-repository-prisma'
import { AuthenticateUseCase } from '../authenticate'

export function makeAuthenticateUseCase() {
  const usersRepository = new UsersRepositoryPrisma()
  const authenticateUseCase = new AuthenticateUseCase(usersRepository)

  return authenticateUseCase
}
