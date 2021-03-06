import { BrandEntity } from '../brand/brand.entity';
import { DeviceEntity } from '../device/device.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'type' })
export class TypeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => DeviceEntity, (device) => device.id)
  devices: DeviceEntity[];

  @ManyToMany(() => BrandEntity, (brand) => brand.types)
  brands: BrandEntity[];
}
