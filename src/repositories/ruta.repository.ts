import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Ruta, RutaRelations, Aereopuerto} from '../models';
import {AereopuertoRepository} from './aereopuerto.repository';

export class RutaRepository extends DefaultCrudRepository<
  Ruta,
  typeof Ruta.prototype.Id,
  RutaRelations
> {

  public readonly A_Origen: BelongsToAccessor<Aereopuerto, typeof Ruta.prototype.Id>;

  public readonly destinofk: BelongsToAccessor<Aereopuerto, typeof Ruta.prototype.Id>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('AereopuertoRepository') protected aereopuertoRepositoryGetter: Getter<AereopuertoRepository>,
  ) {
    super(Ruta, dataSource);
    this.destinofk = this.createBelongsToAccessorFor('destinofk', aereopuertoRepositoryGetter,);
    this.registerInclusionResolver('destinofk', this.destinofk.inclusionResolver);
    this.A_Origen = this.createBelongsToAccessorFor('A_Origen', aereopuertoRepositoryGetter,);
    this.registerInclusionResolver('A_Origen', this.A_Origen.inclusionResolver);
  }
}
