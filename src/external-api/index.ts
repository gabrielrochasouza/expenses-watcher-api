import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dadosabertos.camara.leg.br/api/v2/',
});

export default {
  consultarDeputados() {
    return api.get('deputados');
  },
  procurarDeputado(id) {
    return api.get('deputados/' + id);
  },
  consultarDespesas({ id, pagina, ano }) {
    return api.get(
      `deputados/${id}/despesas/?pagina=${pagina}&ano=${ano}&itens=100&ordenarPor=mes&ordem=Desc`,
    );
  },
};
