import { DeviceEntity } from 'src/device/device.entity';
import { TypeEntity } from 'src/type/type.entity';
export declare class BrandEntity {
    id: number;
    name: string;
    devices: DeviceEntity[];
    types: TypeEntity[];
}
