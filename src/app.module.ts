import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';
import { VendidosController } from './controllers/vendidos.controller';
import { ProductsService } from './services/products.service';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, CategoriesController, VendidosController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
