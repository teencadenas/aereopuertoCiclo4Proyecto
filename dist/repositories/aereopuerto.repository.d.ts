import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Aereopuerto, AereopuertoRelations } from '../models';
export declare class AereopuertoRepository extends DefaultCrudRepository<Aereopuerto, typeof Aereopuerto.prototype.Id, AereopuertoRelations> {
    constructor(dataSource: MongoDataSource);
}
