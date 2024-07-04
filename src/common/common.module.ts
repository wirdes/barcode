// src/common/common.module.ts
import { Module } from '@nestjs/common';
import { ResponseService } from './services/response.service';

@Module({
  providers: [ResponseService],
  exports: [ResponseService],
})
export class CommonModule {}
