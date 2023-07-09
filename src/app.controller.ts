import { Controller, Get, Param, Query, Response } from '@nestjs/common';
import { AppService } from './app.service';
import { Response as Res } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  appRunningMessage(): string {
    return 'App is running!! 🎉';
  }
  @Get('deputados')
  async consultarDeputados(): Promise<any> {
    return this.appService.consultarDeputados();
  }
  @Get('deputados/:id')
  async procurarDeputado(@Param('id') id: string): Promise<any> {
    return this.appService.procurarDeputado(id);
  }
  @Get('deputados/:id/despesas')
  async consultarDespesas(
    @Param('id') id: string,
    @Query('pagina') pagina: string,
    @Query('ano') ano: string,
    @Query('itens') itens: string,
    @Query('ordenarPor') ordenarPor: string,
    @Query('ordem') ordem: string,
    @Response() response: Res,
  ): Promise<Res> {
    const res = await this.appService.consultarDespesas({
      id,
      pagina,
      ano,
      itens,
      ordenarPor,
      ordem,
    });
    return response
      .set({ 'x-total-count': res.headers['x-total-count'] })
      .json(res.data);
  }
}
