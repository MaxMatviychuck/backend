import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesModule } from 'src/files/files.module';
import { AdminRoleGuard } from 'src/user/guards/admin-role.guard';
import { AuthGuard } from 'src/user/guards/auth.guard';
import { UserEntity } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { DeviceController } from './device.controller';
import { DeviceEntity } from './device.entity';
import { DeviceService } from './device.service';

@Module({
  imports: [TypeOrmModule.forFeature([DeviceEntity, UserEntity]), FilesModule],
  controllers: [DeviceController],
  providers: [DeviceService, UserService, AuthGuard, AdminRoleGuard],
})
export class DeviceModule {}
