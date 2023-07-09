import { Injectable } from '@nestjs/common';
import externalApi from './external-api';

@Injectable()
export class AppService {
  async consultarDeputados(): Promise<any> {
    const response = await externalApi.consultarDeputados();
    return response.data;
  }
  async procurarDeputado(id): Promise<any> {
    const response = await externalApi.procurarDeputado(id);
    return response.data;
  }
  async consultarDespesas({
    id,
    pagina,
    ano,
    itens,
    ordenarPor,
    ordem,
  }): Promise<any> {
    const response = await externalApi.consultarDespesas({
      id,
      pagina,
      ano,
      itens,
      ordenarPor,
      ordem,
    });
    return response;
  }
}
