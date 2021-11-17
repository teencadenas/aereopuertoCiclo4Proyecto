import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Aereopuerto, AereopuertoRelations} from '../models';

export class AereopuertoRepository extends DefaultCrudRepository<
  Aereopuerto,
  typeof Aereopuerto.prototype.Id,
  AereopuertoRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Aereopuerto, dataSource);
  }
}
