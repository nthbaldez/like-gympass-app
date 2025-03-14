import { Prisma, User } from '@prisma/client'
import { UsersRepository } from '../interfaces/users-repository'

export class InMemoryUsersRepository implements UsersRepository {
  public users: User[] = []

  async findById(id: string): Promise<User | null> {
    const user = this.users.find((item) => item.id === id)

    if (!user) {
      return null
    }

    return user
  }

  async create(data: Prisma.UserCreateInput) {
    const user = {
      id: 'user-1',
      name: data.name,
      email: data.email,
      password_hash: data.password_hash,
      created_at: new Date(),
    }

    this.users.push(user)
    return user
  }

  async findByEmail(email: string) {
    const user = this.users.find((item) => item.email === email)

    if (!user) {
      return null
    }

    return user
  }
}
