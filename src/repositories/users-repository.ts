import { prisma } from '@/lib/prisma'
import { UserCreateInput } from './interfaces/user-create-input'

export class UsersRepository {
  async create(data: UserCreateInput) {
    const user = await prisma.user.create({
      data,
    })

    return user
  }
}
