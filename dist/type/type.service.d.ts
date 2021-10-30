import { Repository } from 'typeorm';
import { CreateTypeDto } from './dto/typeDto';
import { TypeEntity } from './type.entity';
export declare class TypeService {
    private readonly typeRepository;
    constructor(typeRepository: Repository<TypeEntity>);
    createType(createTypeDto: CreateTypeDto): Promise<TypeEntity>;
    getAllTypes(): Promise<TypeEntity[]>;
}
