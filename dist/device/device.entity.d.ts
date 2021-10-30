import { BrandEntity } from 'src/brand/brand.entity';
import { TypeEntity } from 'src/type/type.entity';
export declare class DeviceEntity {
    id: number;
    name: string;
    price: number;
    img: string;
    info: string;
    brandId: number;
    typeId: number;
    type: TypeEntity;
    brand: BrandEntity;
}
