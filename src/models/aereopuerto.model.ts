import {Entity, model, property} from '@loopback/repository';

@model()
export class Aereopuerto extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  Id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Ciudad: string;

  @property({
    type: 'string',
    required: true,
  })
  Pais: string;

  @property({
    type: 'string',
    required: true,
  })
  Coord_X: string;

  @property({
    type: 'string',
    required: true,
  })
  Coord_Y: string;

  @property({
    type: 'string',
    required: true,
  })
  Sigla: string;

  @property({
    type: 'string',
    required: true,
  })
  Tipo: string;


  constructor(data?: Partial<Aereopuerto>) {
    super(data);
  }
}

export interface AereopuertoRelations {
  // describe navigational properties here
}

export type AereopuertoWithRelations = Aereopuerto & AereopuertoRelations;
