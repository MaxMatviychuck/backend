import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BrandEntity } from './brand.entity';
import { CreateBrandDto } from './dto/brandDto';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(BrandEntity)
    private readonly brandRepository: Repository<BrandEntity>,
  ) {}
  async createBrand(createBrandDto: CreateBrandDto) {
    const newType = new BrandEntity();
    Object.assign(newType, createBrandDto);
    return this.brandRepository.save(newType);
  }

  async getAllBrands(): Promise<BrandEntity[]> {
    return await this.brandRepository.find();
  }
}
