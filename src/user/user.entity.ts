import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinTable,
} from 'typeorm';
import { hash } from 'bcrypt';

import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'users' })
export class UserEntity {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'test@gmail.com' })
  @Column()
  email: string;

  @ApiProperty({ example: 'John' })
  @Column()
  username: string;

  @ApiHideProperty()
  @Column({ select: false })
  password: string;

  @ApiProperty({ example: 'USER' })
  @Column()
  role: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }
}
