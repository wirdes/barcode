import { Module } from '@nestjs/common';

import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModel } from './entities/product.entity';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [TypeOrmModule.forFeature([ProductModel]), CommonModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
