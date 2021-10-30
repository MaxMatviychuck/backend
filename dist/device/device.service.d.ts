import { FilesService } from 'src/files/files.service';
import { DeleteResult, Repository } from 'typeorm';
import { DeviceEntity } from './device.entity';
import { PersistDeviceDto, DeviceQueryParams } from './dto/deviceDto';
export declare class DeviceService {
    private readonly deviceRepository;
    private readonly fileService;
    constructor(deviceRepository: Repository<DeviceEntity>, fileService: FilesService);
    createDevice(createDeviceDto: PersistDeviceDto, img: any): Promise<{
        img: string;
        id: number;
        name: string;
        price: number;
        info: string;
        brandId: number;
        typeId: number;
        type: import("../type/type.entity").TypeEntity;
        brand: import("../brand/brand.entity").BrandEntity;
    } & DeviceEntity>;
    getAllDevices(query: DeviceQueryParams): Promise<DeviceEntity[]>;
    getOneDevice(id: string): Promise<DeviceEntity>;
    deleteDevice(id: string): Promise<DeleteResult>;
    updateDevice(id: string, createDeviceDto: PersistDeviceDto, img: Blob): Promise<{
        img: string;
        id: number;
        name: string;
        price: number;
        info: string;
        brandId: number;
        typeId: number;
        type: import("../type/type.entity").TypeEntity;
        brand: import("../brand/brand.entity").BrandEntity;
    } & DeviceEntity>;
}
