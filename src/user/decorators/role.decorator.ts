import { SetMetadata } from '@nestjs/common';
import { ROLE_KEY } from '../type';

export const Role = (...roles: string[]) => SetMetadata(ROLE_KEY, roles);
