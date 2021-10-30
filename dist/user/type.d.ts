import { UserEntity } from './user.entity';
export declare type UserType = Omit<UserEntity, 'hashPassword'>;
export declare type UserResponse = UserType & {
    token: string;
};
export declare enum Roles {
    ADMIN = "admin",
    USER = "user"
}
export declare const ROLE_KEY = "role";
