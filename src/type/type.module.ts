import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminRoleGuard } from 'src/user/guards/admin-role.guard';
import { AuthGuard } from 'src/user/guards/auth.guard';
import { UserEntity } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { TypeController } from './type.controller';
import { TypeEntity } from './type.entity';
import { TypeService } from './type.service';

@Module({
  imports: [TypeOrmModule.forFeature([TypeEntity, UserEntity])],
  controllers: [TypeController],
  providers: [TypeService, UserService, AuthGuard, AdminRoleGuard],
})
export class TypeModule {}
