import { User } from '@prisma/client'
import { UserCreateInput } from '../interfaces/user-create-input'

export interface IUsersRepository {
  create(data: UserCreateInput): Promise<User>
  findByEmail(email: string): Promise<User | null>
}
