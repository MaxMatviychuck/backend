import { CreateTypeDto } from './dto/typeDto';
import { TypeEntity } from './type.entity';
import { TypeService } from './type.service';
export declare class TypeController {
    private readonly typeService;
    constructor(typeService: TypeService);
    createType(createTypeDto: CreateTypeDto): Promise<TypeEntity>;
    getAllTypes(): Promise<TypeEntity[]>;
}
