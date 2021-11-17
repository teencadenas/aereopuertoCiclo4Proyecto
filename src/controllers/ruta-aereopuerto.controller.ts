import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Ruta,
  Aereopuerto,
} from '../models';
import {RutaRepository} from '../repositories';

export class RutaAereopuertoController {
  constructor(
    @repository(RutaRepository)
    public rutaRepository: RutaRepository,
  ) { }

  @get('/rutas/{id}/aereopuerto', {
    responses: {
      '200': {
        description: 'Aereopuerto belonging to Ruta',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Aereopuerto)},
          },
        },
      },
    },
  })
  async getAereopuerto(
    @param.path.string('id') id: typeof Ruta.prototype.Id,
  ): Promise<Aereopuerto> {
    return this.rutaRepository.destinofk(id);
  }
}
