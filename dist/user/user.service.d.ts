import { Repository } from 'typeorm';
import { CreateUserDto, LoginDto } from './dto/userDto';
import { UserEntity } from './user.entity';
import { UserResponse } from './type';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    createUser(createUserDto: CreateUserDto): Promise<UserEntity>;
    login(loginDto: LoginDto): Promise<UserEntity>;
    findById(id: number): Promise<UserEntity>;
    generateJwt(user: UserEntity): string;
    buildUserResponse(user: UserEntity): UserResponse;
}
