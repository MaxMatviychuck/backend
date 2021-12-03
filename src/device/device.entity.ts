import { BrandEntity } from '../brand/brand.entity';
import { TypeEntity } from '../type/type.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

@Entity({ name: 'device' })
export class DeviceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  img: string;

  @Column()
  info: string;

  @Column()
  brandId: number;

  @Column()
  typeId: number;

  @ManyToOne(() => TypeEntity, (type) => type.id)
  type: TypeEntity;

  @ManyToOne(() => BrandEntity, (brand) => brand.id)
  brand: BrandEntity;
}
