import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './api/product/product.module';
import { TypeOrmConfigService } from './database/db.service';
import { CommonModule } from './common/common.module';
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    ProductModule,
    CommonModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
