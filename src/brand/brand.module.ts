import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminRoleGuard } from 'src/user/guards/admin-role.guard';
import { AuthGuard } from 'src/user/guards/auth.guard';
import { UserEntity } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { BrandController } from './brand.controller';
import { BrandEntity } from './brand.entity';
import { BrandService } from './brand.service';

@Module({
  imports: [TypeOrmModule.forFeature([BrandEntity, UserEntity])],
  controllers: [BrandController],
  providers: [BrandService, UserService, AuthGuard, AdminRoleGuard],
})
export class BrandModule {}
