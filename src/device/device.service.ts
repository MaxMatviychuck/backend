import { HttpException, HttpStatus, Injectable, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FilesService } from 'src/files/files.service';
import { DeleteResult, Repository } from 'typeorm';
import { DeviceEntity } from './device.entity';
import { PersistDeviceDto, DeviceQueryParams } from './dto/deviceDto';

@Injectable()
export class DeviceService {
  constructor(
    @InjectRepository(DeviceEntity)
    private readonly deviceRepository: Repository<DeviceEntity>,
    private readonly fileService: FilesService,
  ) {}

  async createDevice(createDeviceDto: PersistDeviceDto, img: any) {
    const newDevice = new DeviceEntity();
    const fileName = await this.fileService.createFile(img);
    Object.assign(newDevice, createDeviceDto);

    return await this.deviceRepository.save({ ...newDevice, img: fileName });
  }

  async getAllDevices(
    @Query() query: DeviceQueryParams,
  ): Promise<DeviceEntity[]> {
    let { brandId, typeId, page, limit } = query;
    page = page || 1;
    limit = limit || 9;

    let offset = page * limit - limit;
    let devices: DeviceEntity[];

    if (!brandId && !typeId) {
      devices = await this.deviceRepository.find({
        take: limit,
        skip: offset,
      });
    }
    if (brandId && !typeId) {
      devices = await this.deviceRepository.find({
        where: { brandId },
        take: limit,
        skip: offset,
      });
    }
    if (!brandId && typeId) {
      devices = await this.deviceRepository.find({
        where: { typeId },
        take: limit,
        skip: offset,
      });
    }
    if (brandId && typeId) {
      devices = await this.deviceRepository.find({
        where: { typeId, brandId },
        take: limit,
        skip: offset,
      });
    }
    return devices;
  }

  async getOneDevice(id: string): Promise<DeviceEntity> {
    return await this.deviceRepository.findOne(id);
  }

  async deleteDevice(id: string): Promise<DeleteResult> {
    return await this.deviceRepository.delete(id);
  }

  async updateDevice(id: string, createDeviceDto: PersistDeviceDto, img: Blob) {
    const fileName = await this.fileService.createFile(img);
    const device = await this.deviceRepository.findOne(id);

    if (!device) {
      throw new HttpException('Article does not exist', HttpStatus.NOT_FOUND);
    }

    Object.assign(device, createDeviceDto);

    return await this.deviceRepository.save({ ...device, img: fileName });
  }
}
