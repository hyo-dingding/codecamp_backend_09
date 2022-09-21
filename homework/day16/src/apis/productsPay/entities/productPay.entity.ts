import { User } from 'src/apis/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductPay {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  paymentDate: number;
  @Column()
  total: number;
  @Column()
  paymentTime: number;
  @Column()
  isPaySoldout: boolean;
  @Column()
  isCancel: boolean;

  @ManyToOne(() => User)
  user: User;
}
