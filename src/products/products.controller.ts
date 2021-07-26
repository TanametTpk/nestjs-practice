import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Product } from '@prisma/client';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() product: Product) {
    return this.productsService.create(product);
  }

  @Get()
  findAll() {
    return this.productsService.findAll({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne({ id });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() product: Product) {
    return this.productsService.update(id, product);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove({ id });
  }
}
