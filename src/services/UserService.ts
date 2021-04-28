import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/users"
import { UsersRepository } from "../repositories/usersRepository"


class UserService {
  private userRepository: Repository<User>
  constructor() {
    this.userRepository = getCustomRepository(UsersRepository)
  }

  async create(email: string) {

    const userExists = await this.userRepository.findOne({
      email
    })

    if (userExists)
      return userExists

    const user = this.userRepository.create({ email })
    await this.userRepository.save(user)

    return user

  }

  async findByEmail(email: string) {
    const userExists = await this.userRepository.findOne({
      email
    })

    return userExists
  }
}


export { UserService }