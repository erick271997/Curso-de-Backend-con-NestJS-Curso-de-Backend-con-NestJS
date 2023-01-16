import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('vendidos')
export class VendidosController {
  @Get(':vendidosId')
  vendidos(@Param('vendidosId') vendidosId: string) {
    return `Los mas Vendidos id: ${vendidosId}`;
  }
}
