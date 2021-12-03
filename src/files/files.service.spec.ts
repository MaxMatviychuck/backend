import { Test } from '@nestjs/testing';

import { FilesService } from './files.service';

describe('Device Controller', () => {
  let filesService: FilesService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [FilesService],
    }).compile();

    filesService = moduleRef.get<FilesService>(FilesService);
  });

  describe('createFile', () => {
    it('should return file', async () => {
      const file = '';

      jest.spyOn(filesService, 'createFile').mockResolvedValue(file);

      expect(await filesService.createFile(file)).toBe(file);
    });
  });
});
