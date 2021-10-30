import { CreateUserDto, LoginDto } from './dto/userDto';
import { UserResponse } from './type';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUserDto: CreateUserDto): Promise<UserResponse>;
    login(loginDto: LoginDto): Promise<UserResponse>;
    currentUser(id: number): Promise<UserEntity>;
}
