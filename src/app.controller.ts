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
  @Get(
    'deputados/:id/despesas/?pagina=:pagina&ano=:ano&itens=100&ordenarPor=mes&ordem=Desc',
  )
  async consultarDespesas(
    @Param('id') id: string,
    @Query() pagina: string,
    @Query() ano: string,
  ): Promise<any> {
    return this.appService.consultarDespesas({ id, pagina, ano });
  }
}
