import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TypeController } from './type.controller';
import { TypeService } from './type.service';
import { TypeEntity } from './type.entity';

export type MockType<T> = {
  [P in keyof T]?: jest.Mock<{}>;
};

export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(
  () => ({
    find: jest.fn((entity) => entity),
    save: jest.fn((entity) => entity),
  }),
);

describe('TypeController', () => {
  let typeController: TypeController;
  let typeService: TypeService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [TypeController],
      providers: [
        TypeService,
        {
          provide: getRepositoryToken(TypeEntity),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    typeService = moduleRef.get<TypeService>(TypeService);
    typeController = moduleRef.get<TypeController>(TypeController);
  });

  describe('getAllTypes', () => {
    it('should return an array of types', async () => {
      const result = [
        {
          id: 1,
          name: 'testType',
          devices: [],
          types: [],
          brands: [],
        },
      ];

      jest.spyOn(typeService, 'getAllTypes').mockResolvedValue(result);

      expect(await typeController.getAllTypes()).toBe(result);
    });
  });
  describe('createType', () => {
    it('should create new type', async () => {
      const result = {
        id: 1,
        name: 'testType',
        devices: [],
        types: [],
        brands: [],
      };
      jest.spyOn(typeService, 'createType').mockResolvedValue(result);

      expect(await typeController.createType({ name: 'name' })).toBe(result);
    });
  });
});
