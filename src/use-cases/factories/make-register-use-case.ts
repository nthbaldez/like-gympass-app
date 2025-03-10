import { RegisterUseCase } from '../register'
import { UsersRepositoryPrisma } from '@/repositories/prisma/users-repository-prisma'

export function makeRegisterUseCase() {
  const usersRepository = new UsersRepositoryPrisma()
  const registerUseCase = new RegisterUseCase(usersRepository)

  return registerUseCase
}
