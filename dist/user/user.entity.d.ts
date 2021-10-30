export declare class UserEntity {
    id: number;
    email: string;
    username: string;
    password: string;
    role: string;
    hashPassword(): Promise<void>;
}
