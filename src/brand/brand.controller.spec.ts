import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BrandController } from './brand.controller';
import { BrandService } from './brand.service';
import { BrandEntity } from './brand.entity';

export type MockType<T> = {
  [P in keyof T]?: jest.Mock<{}>;
};

export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(
  () => ({
    find: jest.fn((entity) => entity),
    save: jest.fn((entity) => entity),
  }),
);

describe('BrandController', () => {
  let brandController: BrandController;
  let brandService: BrandService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [BrandController],
      providers: [
        BrandService,
        {
          provide: getRepositoryToken(BrandEntity),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    brandService = moduleRef.get<BrandService>(BrandService);
    brandController = moduleRef.get<BrandController>(BrandController);
  });

  describe('getAllBrands', () => {
    it('should return an array of brands', async () => {
      const result = [
        {
          id: 1,
          name: 'testBrand',
          devices: [],
          types: [],
        },
      ];

      jest.spyOn(brandService, 'getAllBrands').mockResolvedValue(result);

      expect(await brandController.getAllBrands()).toBe(result);
    });
  });
  describe('createBrand', () => {
    it('should create new brand', async () => {
      const result = {
        id: 1,
        name: 'testBrand',
        devices: [],
        types: [],
      };
      jest.spyOn(brandService, 'createBrand').mockResolvedValue(result);

      expect(await brandController.createBrand({ name: 'name' })).toBe(result);
    });
  });
});
