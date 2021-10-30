import { DeviceEntity } from 'src/device/device.entity';
import { TypeEntity } from 'src/type/type.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  JoinTable,
} from 'typeorm';

@Entity({ name: 'brand' })
export class BrandEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => DeviceEntity, (device) => device.id)
  devices: DeviceEntity[];

  @ManyToMany(() => TypeEntity, (type) => type.brands)
  @JoinTable()
  types: TypeEntity[];
}
