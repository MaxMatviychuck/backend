import { DeviceService } from './device.service';
import { PersistDeviceDto, DeviceQueryParams } from './dto/deviceDto';
import { DeviceEntity } from './device.entity';
import { DeleteResult } from 'typeorm';
export declare class DeviceController {
    private readonly deviceService;
    constructor(deviceService: DeviceService);
    createDevice(createDeviceDto: PersistDeviceDto, img: any): Promise<DeviceEntity>;
    getAllDevices(query: DeviceQueryParams): Promise<DeviceEntity[]>;
    getOneDevice(id: string): Promise<DeviceEntity>;
    deleteDevice(id: string): Promise<DeleteResult>;
    updateDevice(id: string, updateDeviceDto: PersistDeviceDto, img: any): Promise<DeviceEntity>;
}
