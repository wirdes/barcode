import { Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create';
import { ProductModel } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductModel)
    private readonly productRepository: Repository<ProductModel>,
  ) {}

  async findAll(): Promise<ProductModel[]> {
    return await this.productRepository.find();
  }

  async findOne(barcode: string): Promise<ProductModel> {
    return await this.productRepository.findOne({
      where: { barcode },
    });
  }

  async create(data: CreateProductDto): Promise<ProductModel> {
    const product = this.productRepository.create(data);
    await this.productRepository.save(product);
    return product;
  }

  async remove(id: string): Promise<void> {
    await this.productRepository.delete(id);
  }
}
