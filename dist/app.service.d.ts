export declare class AppService {
    consultarDeputados(): Promise<any>;
    procurarDeputado(id: any): Promise<any>;
    consultarDespesas({ id, pagina, ano, itens, ordenarPor, ordem, }: {
        id: any;
        pagina: any;
        ano: any;
        itens: any;
        ordenarPor: any;
        ordem: any;
    }): Promise<any>;
}
