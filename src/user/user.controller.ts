import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ExpressRequest } from 'src/type';
import { CreateUserDto, LoginDto } from './dto/userDto';
import { AdminRoleGuard } from './guards/admin-role.guard';
import { AuthGuard } from './guards/auth.guard';
import { UserResponse } from './type';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Create User' })
  @ApiResponse({ status: 200, type: UserEntity })
  @Post()
  @UsePipes(new ValidationPipe())
  async createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<UserResponse> {
    const user = await this.userService.createUser(createUserDto);
    return this.userService.buildUserResponse(user);
  }

  @ApiOperation({ summary: 'Login' })
  @ApiResponse({ status: 200, type: UserEntity })
  @Post('/login')
  @UsePipes(new ValidationPipe())
  async login(@Body() loginDto: LoginDto): Promise<UserResponse> {
    const user = await this.userService.login(loginDto);
    return this.userService.buildUserResponse(user);
  }

  @ApiOperation({ summary: 'Get Current User' })
  @ApiResponse({ status: 200, type: UserEntity })
  @Get('/current-user/:id')
  async currentUser(@Param('id') id: number): Promise<UserEntity> {
    return this.userService.findById(id);
  }
}
