import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, LoginDto } from './dto/userDto';
import { UserEntity } from './user.entity';
import { sign } from 'jsonwebtoken';
import { JWT_SECRET } from './config';
import { UserResponse } from './type';
import { compare } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const userByEmail = await this.userRepository.findOne({
      email: createUserDto.email,
    });
    const userByUserName = await this.userRepository.findOne({
      username: createUserDto.username,
    });
    if (userByEmail || userByUserName) {
      throw new HttpException(
        'User already exist',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    const newUser = new UserEntity();
    Object.assign(newUser, createUserDto);
    const createdUser = await this.userRepository.save(newUser);

    delete createdUser.password;
    return createdUser;
  }

  async login(loginDto: LoginDto): Promise<UserEntity> {
    const user = await this.userRepository.findOne(
      {
        email: loginDto.email,
      },
      { select: ['id', 'username', 'email', 'role', 'password'] },
    );
    if (!user) {
      throw new HttpException(
        'Credentials are not valid',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const isPasswordCorrect: boolean = await compare(
      loginDto.password,
      user.password,
    );

    if (!isPasswordCorrect) {
      throw new HttpException(
        'Password is incorrect',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    delete user.password;
    return user;
  }

  findById(id: number): Promise<UserEntity> {
    return this.userRepository.findOne(id);
  }

  generateJwt(user: UserEntity): string {
    return sign(
      {
        id: user.id,
        name: user.username,
        email: user.email,
        role: user.role,
      },
      JWT_SECRET,
    );
  }

  buildUserResponse(user: UserEntity): UserResponse {
    return {
      ...user,
      token: this.generateJwt(user),
    };
  }
}
