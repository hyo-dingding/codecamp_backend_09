import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Board {
  @PrimaryGeneratedColumn('increment')
  number: number;
  @Column()
  writer: string;
  @Column()
  title: string;
  @Column()
  contents: string;
}
