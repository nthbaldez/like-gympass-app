import '@fastify/jwt'

declare module '@fastify/jwt' {
  export interface FastifyJWT {
    payload: { user_name: string }
    user: {
      sub: string
    }
  }
}
