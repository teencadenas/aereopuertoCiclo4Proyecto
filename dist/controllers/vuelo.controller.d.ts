import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Vuelo } from '../models';
import { VueloRepository } from '../repositories';
export declare class VueloController {
    vueloRepository: VueloRepository;
    constructor(vueloRepository: VueloRepository);
    create(vuelo: Omit<Vuelo, 'id'>): Promise<Vuelo>;
    count(where?: Where<Vuelo>): Promise<Count>;
    find(filter?: Filter<Vuelo>): Promise<Vuelo[]>;
    updateAll(vuelo: Vuelo, where?: Where<Vuelo>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Vuelo>): Promise<Vuelo>;
    updateById(id: string, vuelo: Vuelo): Promise<void>;
    replaceById(id: string, vuelo: Vuelo): Promise<void>;
    deleteById(id: string): Promise<void>;
}
