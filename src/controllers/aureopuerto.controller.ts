import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {Aereopuerto} from '../models';
import {AereopuertoRepository} from '../repositories';

export class AureopuertoController {
  constructor(
    @repository(AereopuertoRepository)
    public aereopuertoRepository: AereopuertoRepository,
  ) { }

  @post('/aereopuertos')
  @response(200, {
    description: 'Aereopuerto model instance',
    content: {'application/json': {schema: getModelSchemaRef(Aereopuerto)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aereopuerto, {
            title: 'NewAereopuerto',
            exclude: ['Id'],
          }),
        },
      },
    })
    aereopuerto: Omit<Aereopuerto, 'id'>,
  ): Promise<Aereopuerto> {
    return this.aereopuertoRepository.create(aereopuerto);
  }

  @get('/aereopuertos/count')
  @response(200, {
    description: 'Aereopuerto model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Aereopuerto) where?: Where<Aereopuerto>,
  ): Promise<Count> {
    return this.aereopuertoRepository.count(where);
  }

  @get('/aereopuertos')
  @response(200, {
    description: 'Array of Aereopuerto model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Aereopuerto, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Aereopuerto) filter?: Filter<Aereopuerto>,
  ): Promise<Aereopuerto[]> {
    return this.aereopuertoRepository.find(filter);
  }

  @patch('/aereopuertos')
  @response(200, {
    description: 'Aereopuerto PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aereopuerto, {partial: true}),
        },
      },
    })
    aereopuerto: Aereopuerto,
    @param.where(Aereopuerto) where?: Where<Aereopuerto>,
  ): Promise<Count> {
    return this.aereopuertoRepository.updateAll(aereopuerto, where);
  }

  @get('/aereopuertos/{id}')
  @response(200, {
    description: 'Aereopuerto model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Aereopuerto, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Aereopuerto, {exclude: 'where'}) filter?: FilterExcludingWhere<Aereopuerto>
  ): Promise<Aereopuerto> {
    return this.aereopuertoRepository.findById(id, filter);
  }

  @patch('/aereopuertos/{id}')
  @response(204, {
    description: 'Aereopuerto PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aereopuerto, {partial: true}),
        },
      },
    })
    aereopuerto: Aereopuerto,
  ): Promise<void> {
    await this.aereopuertoRepository.updateById(id, aereopuerto);
  }

  @put('/aereopuertos/{id}')
  @response(204, {
    description: 'Aereopuerto PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() aereopuerto: Aereopuerto,
  ): Promise<void> {
    await this.aereopuertoRepository.replaceById(id, aereopuerto);
  }

  @del('/aereopuertos/{id}')
  @response(204, {
    description: 'Aereopuerto DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.aereopuertoRepository.deleteById(id);
  }
}
