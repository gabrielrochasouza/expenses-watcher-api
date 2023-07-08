import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('deputados')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async consultarDeputados(): Promise<any> {
    return this.appService.consultarDeputados();
  }
  @Get('/:id')
  async procurarDeputado(@Param('id') id: string): Promise<any> {
    return this.appService.procurarDeputado(id);
  }
  @Get(
    '/:id/despesas/?pagina=:pagina&ano=:ano&itens=100&ordenarPor=mes&ordem=Desc',
  )
  async consultarDespesas(
    @Param('id') id: string,
    @Query() pagina: string,
    @Query() ano: string,
  ): Promise<any> {
    return this.appService.consultarDespesas({ id, pagina, ano });
  }
}
