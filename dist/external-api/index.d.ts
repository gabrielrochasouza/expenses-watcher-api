declare const _default: {
    consultarDeputados(): Promise<import("axios").AxiosResponse<any, any>>;
    procurarDeputado(id: any): Promise<import("axios").AxiosResponse<any, any>>;
    consultarDespesas({ id, pagina, ano }: {
        id: any;
        pagina: any;
        ano: any;
    }): Promise<import("axios").AxiosResponse<any, any>>;
};
export default _default;
