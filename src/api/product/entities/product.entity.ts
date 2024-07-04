import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class ProductModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index({ unique: true })
  barcode: string;

  @Column()
  name: string;

  @Column()
  date: Date;
}
