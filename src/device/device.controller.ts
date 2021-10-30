import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  SetMetadata,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DeviceService } from './device.service';
import { PersistDeviceDto, DeviceQueryParams } from './dto/deviceDto';
import { Role } from '../user/decorators/role.decorator';
import { Roles } from 'src/user/type';
import { AuthGuard } from 'src/user/guards/auth.guard';
import { AdminRoleGuard } from 'src/user/guards/admin-role.guard';
import { DeviceEntity } from './device.entity';
import { DeleteResult } from 'typeorm';

@Controller('/device')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}
  @Post()
  @Role(Roles.ADMIN)
  @UseGuards(AuthGuard, AdminRoleGuard)
  @UseInterceptors(FileInterceptor('img'))
  async createDevice(
    @Body() createDeviceDto: PersistDeviceDto,
    @UploadedFile() img: any,
  ): Promise<DeviceEntity> {
    return this.deviceService.createDevice(createDeviceDto, img);
  }

  @Get()
  async getAllDevices(
    @Query() query: DeviceQueryParams,
  ): Promise<DeviceEntity[]> {
    return this.deviceService.getAllDevices(query);
  }

  @Get(':id')
  async getOneDevice(@Param('id') id: string): Promise<DeviceEntity> {
    return this.deviceService.getOneDevice(id);
  }

  @Delete(':id')
  @Role(Roles.ADMIN)
  @UseGuards(AuthGuard, AdminRoleGuard)
  async deleteDevice(@Param('id') id: string): Promise<DeleteResult> {
    return this.deviceService.deleteDevice(id);
  }

  @Put(':id')
  @Role(Roles.ADMIN)
  @UseGuards(AuthGuard, AdminRoleGuard)
  @UseInterceptors(FileInterceptor('img'))
  async updateDevice(
    @Param('id') id: string,
    @Body() updateDeviceDto: PersistDeviceDto,
    @UploadedFile() img: any,
  ): Promise<DeviceEntity> {
    return this.deviceService.updateDevice(id, updateDeviceDto, img);
  }
}
