export declare class AppService {
    consultarDeputados(): Promise<any>;
    procurarDeputado(id: any): Promise<any>;
    consultarDespesas({ id, pagina, ano }: {
        id: any;
        pagina: any;
        ano: any;
    }): Promise<any>;
}
