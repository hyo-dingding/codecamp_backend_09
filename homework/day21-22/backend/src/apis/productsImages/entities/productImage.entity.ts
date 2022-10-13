import { Product } from 'src/apis/products/entities/product.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductImage {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  imageUrl: string;
  @Column()
  mainImageUrl: string;

  @ManyToOne(() => Product)
  products: Product;
}
