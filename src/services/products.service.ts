import { Injectable, NotFoundException } from '@nestjs/common';
import { Products } from '../entitis/products.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';

@Injectable()
export class ProductsService {
  remove(arg0: number) {
    throw new Error('Method not implemented.');
  }
  private counterId = 1;
  private products: Products[] = [
    {
      id: 1,
      name: 'Products 1',
      description: 'bla bla',
      price: 122,
      image: '',
      stock: 12,
    },
  ];
  findAll() {
    return this.products;
  }
  findOne(id: number) {
    const product = this.products.find((item) => item.id === id); // aqui dice retorname le producto con el identificador igual que me esta enviando por parametro que es id
    if (!product) {
      throw new NotFoundException(`Producto con ID #${id} no encontrado.`);
    }
    return product;
  }
  create(payload: CreateProductDto) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }
}

// estos es la otra parte para que se ponga lo que se solicite y no se cambien ejeplo si pido  price se ponga asi no una letra
