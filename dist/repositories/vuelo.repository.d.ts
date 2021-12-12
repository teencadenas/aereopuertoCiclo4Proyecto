import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Vuelo, VueloRelations } from '../models';
export declare class VueloRepository extends DefaultCrudRepository<Vuelo, typeof Vuelo.prototype.id, VueloRelations> {
    constructor(dataSource: MongoDataSource);
}
