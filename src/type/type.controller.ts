import { Body, Controller, Post, Get, UseGuards } from '@nestjs/common';
import { Role } from '../user/decorators/role.decorator';
import { AdminRoleGuard } from '../user/guards/admin-role.guard';
import { AuthGuard } from '../user/guards/auth.guard';
import { Roles } from '../user/type';
import { CreateTypeDto } from './dto/typeDto';
import { TypeEntity } from './type.entity';
import { TypeService } from './type.service';

@Controller('/type')
export class TypeController {
  constructor(private readonly typeService: TypeService) {}
  @Post()
  @Role(Roles.ADMIN)
  @UseGuards(AuthGuard, AdminRoleGuard)
  async createType(@Body() createTypeDto: CreateTypeDto): Promise<TypeEntity> {
    return this.typeService.createType(createTypeDto);
  }

  @Get()
  async getAllTypes(): Promise<TypeEntity[]> {
    return this.typeService.getAllTypes();
  }
}
