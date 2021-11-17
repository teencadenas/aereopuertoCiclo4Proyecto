import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Aereopuerto} from './aereopuerto.model';

@model()
export class Ruta extends Entity {
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
  TiempoEstimado: string;

  @belongsTo(() => Aereopuerto, {name: 'A_Origen'})
  origen: string;

  @belongsTo(() => Aereopuerto, {name: 'A_Destino'})
  destino: string;

  constructor(data?: Partial<Ruta>) {
    super(data);
  }
}

export interface RutaRelations {
  // describe navigational properties here
}

export type RutaWithRelations = Ruta & RutaRelations;
