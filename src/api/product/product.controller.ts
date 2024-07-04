import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create';
import { ResponseService } from 'src/common/services/response.service';

@Controller('products')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly responseService: ResponseService,
  ) {}

  @Get(':barcode')
  async findOne(@Param('barcode') barcode: string) {
    try {
      const product = await this.productService.findOne(barcode);
      return this.responseService.format(product);
    } catch (error) {
      return this.responseService.error(error.message);
    }
  }

  @Post()
  async create(@Body() data: CreateProductDto) {
    try {
      const product = await this.productService.create(data);
      return this.responseService.format(product);
    } catch (error) {
      return this.responseService.error(error.message);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.productService.remove(id);
      return this.responseService.format(null, 'Product removed');
    } catch (error) {
      return this.responseService.error(error.message);
    }
  }
}
