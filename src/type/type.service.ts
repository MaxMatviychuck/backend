import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTypeDto } from './dto/typeDto';
import { TypeEntity } from './type.entity';

@Injectable()
export class TypeService {
  constructor(
    @InjectRepository(TypeEntity)
    private readonly typeRepository: Repository<TypeEntity>,
  ) {}
  async createType(createTypeDto: CreateTypeDto) {
    const newType = new TypeEntity();
    Object.assign(newType, createTypeDto);
    return await this.typeRepository.save(newType);
  }

  async getAllTypes(): Promise<TypeEntity[]> {
    return await this.typeRepository.find();
  }
}
