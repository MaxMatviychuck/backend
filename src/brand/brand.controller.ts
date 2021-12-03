import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Role } from '../user/decorators/role.decorator';
import { AdminRoleGuard } from '../user/guards/admin-role.guard';
import { AuthGuard } from '../user/guards/auth.guard';
import { Roles } from '../user/type';
import { BrandEntity } from './brand.entity';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/brandDto';

@Controller('/brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post()
  @Role(Roles.ADMIN)
  @UseGuards(AuthGuard, AdminRoleGuard)
  async createBrand(
    @Body() createBrandDto: CreateBrandDto,
  ): Promise<BrandEntity> {
    return this.brandService.createBrand(createBrandDto);
  }

  @Get()
  async getAllBrands(): Promise<BrandEntity[]> {
    return this.brandService.getAllBrands();
  }
}
