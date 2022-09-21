import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  password: string;
  @Column()
  phone: number;
  @Column()
  email: string;
  @Column()
  emailSign: string;
  @Column()
  date: string;
  @Column()
  memberSign: string;
  @Column()
  point: number;
  @Column()
  online: boolean;
  @Column()
  personal: string;
  @Column()
  membership: string;
}
