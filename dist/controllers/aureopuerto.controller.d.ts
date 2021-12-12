import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Aereopuerto } from '../models';
import { AereopuertoRepository } from '../repositories';
export declare class AureopuertoController {
    aereopuertoRepository: AereopuertoRepository;
    constructor(aereopuertoRepository: AereopuertoRepository);
    create(aereopuerto: Omit<Aereopuerto, 'id'>): Promise<Aereopuerto>;
    count(where?: Where<Aereopuerto>): Promise<Count>;
    find(filter?: Filter<Aereopuerto>): Promise<Aereopuerto[]>;
    updateAll(aereopuerto: Aereopuerto, where?: Where<Aereopuerto>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Aereopuerto>): Promise<Aereopuerto>;
    updateById(id: string, aereopuerto: Aereopuerto): Promise<void>;
    replaceById(id: string, aereopuerto: Aereopuerto): Promise<void>;
    deleteById(id: string): Promise<void>;
}
