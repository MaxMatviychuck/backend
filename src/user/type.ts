import { UserEntity } from './user.entity';

export type UserType = Omit<UserEntity, 'hashPassword'>;

export type UserResponse = UserType & { token: string };

export enum Roles {
  ADMIN = 'admin',
  USER = 'user',
}

export const ROLE_KEY = 'role';
