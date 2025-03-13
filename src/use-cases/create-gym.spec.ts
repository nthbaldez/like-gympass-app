import { describe, expect, it, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { CreateGymUseCase } from './create-gym'

let usersRepository: InMemoryGymsRepository
let sut: CreateGymUseCase

describe('Gym Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryGymsRepository()
    sut = new CreateGymUseCase(usersRepository)
  })

  it('should be able to create gym', async () => {
    const { gym } = await sut.execute({
      title: 'JavaScript Gym',
      description: null,
      phone: null,
      latitude: -15.8749195,
      longitude: -47.9776495,
    })

    expect(gym.id).toEqual(expect.any(String))
  })

  // it('should hash user password upon registration', async () => {
  //   const { user } = await sut.execute({
  //     name: 'John Doe',
  //     email: 'johndoe@example.com',
  //     password: '123456',
  //   })

  //   const isPasswordCorrectlyHashed = await compare(
  //     '123456',
  //     user.password_hash,
  //   )

  //   expect(isPasswordCorrectlyHashed).toBe(true)
  // })

  // it('should not be able to register with same email twice', async () => {
  //   const email = 'johndoe@example.com'

  //   await sut.execute({
  //     name: 'John Doe',
  //     email,
  //     password: '123456',
  //   })

  //   await expect(() =>
  //     sut.execute({
  //       name: 'John Doe',
  //       email,
  //       password: '123456',
  //     }),
  //   ).rejects.toBeInstanceOf(UserAlreadyExistsError)
  // })
})
