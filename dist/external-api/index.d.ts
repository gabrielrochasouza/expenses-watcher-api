declare const _default: {
    consultarDeputados(): Promise<import("axios").AxiosResponse<any, any>>;
    procurarDeputado(id: any): Promise<import("axios").AxiosResponse<any, any>>;
    consultarDespesas({ id, pagina, ano, itens, ordenarPor, ordem, }: {
        id: any;
        pagina: any;
        ano: any;
        itens?: number;
        ordenarPor?: string;
        ordem?: string;
    }): Promise<import("axios").AxiosResponse<any, any>>;
};
export default _default;
