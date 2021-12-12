import { Entity } from '@loopback/repository';
export declare class Vuelo extends Entity {
    id?: string;
    fechaInicio: string;
    fechaFin: string;
    horaInicio: string;
    horaFin: string;
    asientosVendidos: number;
    nombrePiloto: string;
    ruta: string;
    constructor(data?: Partial<Vuelo>);
}
export interface VueloRelations {
}
export declare type VueloWithRelations = Vuelo & VueloRelations;
