import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'hola mundo';
  }

  @Get('nuevo')
  newEndpoint() {
    return 'Yo souy nuevo';
  }

  @Get('/ruta')
  hello() {
    return 'con /sas/';
  }

  @Get('/vendidos/:vendidosId')
  vendidos(@Param('vendidosId') vendidosId: string) {
    return `Los mas Vendidos id: ${vendidosId}`;
  }
}
