"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const api = axios_1.default.create({
    baseURL: 'https://dadosabertos.camara.leg.br/api/v2/',
});
exports.default = {
    consultarDeputados() {
        return api.get('deputados');
    },
    procurarDeputado(id) {
        return api.get('deputados/' + id);
    },
    consultarDespesas({ id, pagina, ano, itens = 100, ordenarPor = 'mes', ordem = 'Desc', }) {
        return api.get(`deputados/${id}/despesas/?pagina=${pagina}&ano=${ano}&itens=${itens}&ordenarPor=${ordenarPor}&ordem=${ordem}`);
    },
};
//# sourceMappingURL=index.js.map