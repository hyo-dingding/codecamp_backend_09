import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductCategory {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
}

// @OneToMany() 사실 존재하지 않음/  타입오알엠 역할임. qqq: Product
