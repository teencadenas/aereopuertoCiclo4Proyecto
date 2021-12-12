import { Entity } from '@loopback/repository';
export declare class Aereopuerto extends Entity {
    Id?: string;
    Nombre: string;
    Ciudad: string;
    Pais: string;
    Coord_X: string;
    Coord_Y: string;
    Sigla: string;
    Tipo: string;
    constructor(data?: Partial<Aereopuerto>);
}
export interface AereopuertoRelations {
}
export declare type AereopuertoWithRelations = Aereopuerto & AereopuertoRelations;
