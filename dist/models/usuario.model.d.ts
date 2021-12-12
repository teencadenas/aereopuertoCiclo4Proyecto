import { Entity } from '@loopback/repository';
export declare class Usuario extends Entity {
    Id?: string;
    nombre: string;
    apellido: string;
    correo: string;
    Telefono: string;
    password?: string;
    constructor(data?: Partial<Usuario>);
}
export interface UsuarioRelations {
}
export declare type UsuarioWithRelations = Usuario & UsuarioRelations;
