import { Ruta, Aereopuerto } from '../models';
import { RutaRepository } from '../repositories';
export declare class RutaAereopuertoController {
    rutaRepository: RutaRepository;
    constructor(rutaRepository: RutaRepository);
    getAereopuerto(id: typeof Ruta.prototype.Id): Promise<Aereopuerto>;
}
