import {Entity, model, property} from '@loopback/repository';

@model()
export class Vuelo extends Entity {
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
  FechaInicio: string;

  @property({
    type: 'string',
    required: true,
  })
  FechaFin: string;

  @property({
    type: 'string',
    required: true,
  })
  HoraInicio: string;

  @property({
    type: 'string',
    required: true,
  })
  HoraFin: string;

  @property({
    type: 'number',
    required: true,
  })
  AsientosVendidos: number;

  @property({
    type: 'string',
    required: true,
  })
  NombrePiloto: string;

  @property({
    type: 'string',
    required: true,
  })
  Ruta: string;


  constructor(data?: Partial<Vuelo>) {
    super(data);
  }
}

export interface VueloRelations {
  // describe navigational properties here
}

export type VueloWithRelations = Vuelo & VueloRelations;
