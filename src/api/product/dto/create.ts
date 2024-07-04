import { IsDate, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  barcode: string;

  @IsDate()
  date: Date;
}
