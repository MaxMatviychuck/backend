import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { DeviceController } from './device.controller';
import { DeviceService } from './device.service';
import { DeviceEntity } from './device.entity';
import { FilesService } from '../files/files.service';

export type MockType<T> = {
  [P in keyof T]?: jest.Mock<{}>;
};

export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(
  () => ({
    find: jest.fn((entity) => entity),
    save: jest.fn((entity) => entity),
  }),
);

describe('Device Controller', () => {
  let deviceController: DeviceController;
  let deviceService: DeviceService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [DeviceController],
      providers: [
        DeviceService,
        FilesService,
        {
          provide: getRepositoryToken(DeviceEntity),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    deviceService = moduleRef.get<DeviceService>(DeviceService);
    deviceController = moduleRef.get<DeviceController>(DeviceController);
  });

  describe('getAllBrands', () => {
    it('should return an array of brands', async () => {
      const result = [
        {
          id: 123,
          name: 'name',
          info: 'info',
          price: 1,
          img: 'link',
          brandId: 1,
          typeId: 1,
          type: { id: 1, name: 'type', devices: [], brands: [] },
          brand: { id: 1, name: 'brand', devices: [], types: [] },
        },
      ];

      jest.spyOn(deviceService, 'getAllDevices').mockResolvedValue(result);

      expect(
        await deviceController.getAllDevices({
          typeId: null,
          brandId: null,
          page: null,
          limit: 10,
        }),
      ).toBe(result);
    });
  });
  describe('createDevice', () => {
    it('should create new device', async () => {
      const result = {
        id: 123,
        name: 'name',
        info: 'info',
        price: 1,
        img: 'link',
        brandId: 1,
        typeId: 1,
        type: { id: 1, name: 'type', devices: [], brands: [] },
        brand: { id: 1, name: 'brand', devices: [], types: [] },
      };

      jest.spyOn(deviceService, 'createDevice').mockResolvedValue(result);

      expect(
        await deviceController.createDevice(
          {
            name: 'name',
            info: 'info',
            price: 1,
            brandId: 1,
            typeId: 1,
          },
          'file',
        ),
      ).toBe(result);
    });
  });
  describe('getOneDevice', () => {
    it('should return one device by its id', async () => {
      const result = {
        id: 123,
        name: 'name',
        info: 'info',
        price: 1,
        img: 'link',
        brandId: 1,
        typeId: 1,
        type: { id: 1, name: 'type', devices: [], brands: [] },
        brand: { id: 1, name: 'brand', devices: [], types: [] },
      };

      jest.spyOn(deviceService, 'getOneDevice').mockResolvedValue(result);

      expect(await deviceController.getOneDevice('123')).toBe(result);
    });
  });
  describe('deleteDevice', () => {
    it('should delete device by its id', async () => {
      const result = {
        raw: [],
      };

      jest.spyOn(deviceService, 'deleteDevice').mockResolvedValue(result);

      expect(await deviceController.deleteDevice('123')).toBe(result);
    });
  });
  describe('updateDevice', () => {
    it('should update device by its id', async () => {
      const result = {
        id: 123,
        name: 'name',
        info: 'info',
        price: 1,
        img: 'link',
        brandId: 1,
        typeId: 1,
        type: { id: 1, name: 'type', devices: [], brands: [] },
        brand: { id: 1, name: 'brand', devices: [], types: [] },
      };

      jest.spyOn(deviceService, 'updateDevice').mockResolvedValue(result);

      expect(
        await deviceController.updateDevice(
          '123',
          {
            name: 'name',
            info: 'info',
            price: 1,
            brandId: 1,
            typeId: 1,
          },
          'file',
        ),
      ).toBe(result);
    });
  });
});
