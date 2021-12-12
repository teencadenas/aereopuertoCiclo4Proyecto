import { ProyectoCiclo42Application } from '../..';
import { Client } from '@loopback/testlab';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: ProyectoCiclo42Application;
    client: Client;
}
