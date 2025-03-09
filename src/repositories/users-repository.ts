import { prisma } from '@/lib/prisma'
import { UserCreateInput } from './interfaces/user-create-input'
import { IUsersRepository } from './model/users-repository-interface'
import { User } from '@prisma/client'

export class UsersRepository implements IUsersRepository {
  async create(data: UserCreateInput) {
    const user = await prisma.user.create({
      data,
    })

    return user
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    return user
  }
}
