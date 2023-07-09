import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    appRunningMessage(): string;
    consultarDeputados(): Promise<any>;
    procurarDeputado(id: string): Promise<any>;
    consultarDespesas(id: string, pagina: string, ano: string, itens: string, ordenarPor: string, ordem: string): Promise<any>;
}
