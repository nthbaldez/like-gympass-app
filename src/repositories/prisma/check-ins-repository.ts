import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { CheckInsRepository } from '../interfaces/check-in-repository'

export class CheckInsRepositoryPrisma implements CheckInsRepository {
  async create(data: Prisma.CheckInUncheckedCreateInput) {
    const checkIn = await prisma.checkIn.create({
      data,
    })

    return checkIn
  }
}
