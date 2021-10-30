import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { verify } from 'jsonwebtoken';
import { JWT_SECRET } from '../config';
import { ROLE_KEY } from '../type';
import { UserEntity } from '../user.entity';
import { UserService } from '../user.service';

@Injectable()
export class AdminRoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    try {
      const requiredRoles = this.reflector.getAllAndOverride<string[]>(
        ROLE_KEY,
        [context.getHandler(), context.getClass()],
      );

      if (!requiredRoles) {
        return true;
      }

      const req = context.switchToHttp().getRequest();
      const authHeader = req.headers.authorization;

      const bearer = authHeader.split(' ')[0];
      const token = authHeader.split(' ')[1];

      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException({ message: 'User Not Authorized' });
      }

      let user = verify(token, JWT_SECRET);

      user = req.user as UserEntity;
      return requiredRoles.includes(user.role);
    } catch (e) {
      throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);
    }
  }
}
