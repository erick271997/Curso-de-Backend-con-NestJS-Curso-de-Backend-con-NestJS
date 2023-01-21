import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';

import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
  id: any;
  constructor(private productsService: ProductsService) {}
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return {
    //   massage: `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    // };
    return this.productsService.findAll();
  }

  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`;
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    // return {
    //   message: `product ${productId}`,
    // };
    return this.productsService.findOne(productId);
  }
  @Post()
  create(@Body() payload: any) {
    // return {
    //   message: 'accion de crear',
    //   payload,
    // };
    return this.productsService.create(payload);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    // return {
    //   id,
    //   payload,
    //   name: 'nike',
    // };
    return this.productsService.update(id, payload);
  }
  @Delete()
  delete(@Param('id') id: number) {
    return this.productsService.remove(+id);
  }
}
