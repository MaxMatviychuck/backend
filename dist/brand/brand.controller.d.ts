import { BrandEntity } from './brand.entity';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/brandDto';
export declare class BrandController {
    private readonly brandService;
    constructor(brandService: BrandService);
    createBrand(createBrandDto: CreateBrandDto): Promise<BrandEntity>;
    getAllBrands(): Promise<BrandEntity[]>;
}
