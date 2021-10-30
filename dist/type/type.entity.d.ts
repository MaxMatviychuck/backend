import { BrandEntity } from 'src/brand/brand.entity';
import { DeviceEntity } from 'src/device/device.entity';
export declare class TypeEntity {
    id: number;
    name: string;
    devices: DeviceEntity[];
    brands: BrandEntity[];
}
