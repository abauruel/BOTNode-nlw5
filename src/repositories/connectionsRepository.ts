import { EntityRepository, Repository } from 'typeorm'
import { Connnection } from '../entities/connection'

@EntityRepository(Connnection)
class ConnectionsRepository extends Repository<Connnection>{ }

export { ConnectionsRepository }