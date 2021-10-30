import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { ExpressRequest } from 'src/type';
import { verify } from 'jsonwebtoken';
import { JWT_SECRET } from '../config';
import { UserService } from '../user.service';
import { UserEntity } from '../user.entity';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}
  async use(req: ExpressRequest, res: Response, next: NextFunction) {
    if (!req.headers.authorization) {
      req.user = null;
      next();
      return;
    }

    const token = req.headers.authorization.split(' ')[1];

    try {
      const decode = verify(token, JWT_SECRET) as UserEntity;

      const user = await this.userService.findById(decode.id);

      req.user = user;

      next();
    } catch (e) {
      req.user = null;

      next();
    }
  }
}
