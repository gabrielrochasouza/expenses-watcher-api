import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

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
  ): Promise<any> {
    return this.appService.consultarDespesas({
      id,
      pagina,
      ano,
      itens,
      ordenarPor,
      ordem,
    });
  }
}
