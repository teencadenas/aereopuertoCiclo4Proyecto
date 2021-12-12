import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Ruta, RutaRelations, Aereopuerto } from '../models';
import { AereopuertoRepository } from './aereopuerto.repository';
export declare class RutaRepository extends DefaultCrudRepository<Ruta, typeof Ruta.prototype.Id, RutaRelations> {
    protected aereopuertoRepositoryGetter: Getter<AereopuertoRepository>;
    readonly A_Origen: BelongsToAccessor<Aereopuerto, typeof Ruta.prototype.Id>;
    readonly destinofk: BelongsToAccessor<Aereopuerto, typeof Ruta.prototype.Id>;
    constructor(dataSource: MongoDataSource, aereopuertoRepositoryGetter: Getter<AereopuertoRepository>);
}
