import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';

export type MockType<T> = {
  [P in keyof T]?: jest.Mock<{}>;
};

export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(
  () => ({
    findById: jest.fn((entity) => entity),
    save: jest.fn((entity) => entity),
  }),
);

const signMock = jest.fn();

jest.mock(
  'jsonwebtoken',
  (): Record<string, unknown> => ({
    ...jest.requireActual('jsonwebtoken'),
    sign: () => signMock(),
  }),
);

describe('User Controller', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        {
          provide: getRepositoryToken(UserEntity),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    userService = moduleRef.get<UserService>(UserService);
    userController = moduleRef.get<UserController>(UserController);
  });

  describe('currentUser', () => {
    it('should return current user', async () => {
      const user = {
        id: 1,
        email: 'mail@gmail.com',
        username: 'test',
        password: 'test',
        role: 'test',
        hashPassword: Promise.resolve,
      };

      jest.spyOn(userService, 'findById').mockResolvedValue(user);

      expect(await userController.currentUser(1)).toBe(user);
    });
  });
});
