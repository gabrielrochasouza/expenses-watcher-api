import { AppService } from './app.service';
import { Response as Res } from 'express';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    appRunningMessage(): string;
    consultarDeputados(): Promise<any>;
    procurarDeputado(id: string): Promise<any>;
    consultarDespesas(id: string, pagina: string, ano: string, itens: string, ordenarPor: string, ordem: string, response: Res): Promise<Res>;
}
