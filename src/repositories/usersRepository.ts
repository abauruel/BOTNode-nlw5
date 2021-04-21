import { EntityRepository, Repository } from "typeorm";
import { User } from '../entities/users'

@EntityRepository(User)
class UsersRepository extends Repository<User>{

}

export { UsersRepository }