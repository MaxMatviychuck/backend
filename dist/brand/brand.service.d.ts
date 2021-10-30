import { Repository } from 'typeorm';
import { BrandEntity } from './brand.entity';
import { CreateBrandDto } from './dto/brandDto';
export declare class BrandService {
    private readonly brandRepository;
    constructor(brandRepository: Repository<BrandEntity>);
    createBrand(createBrandDto: CreateBrandDto): Promise<BrandEntity>;
    getAllBrands(): Promise<BrandEntity[]>;
}
