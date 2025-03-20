import { RegisterUseCase } from '../register'
import { UsersRepositoryPrisma } from '@/repositories/prisma/prisma-users-repository'

export function makeRegisterUseCase() {
  const usersRepository = new UsersRepositoryPrisma()
  const registerUseCase = new RegisterUseCase(usersRepository)

  return registerUseCase
}
