"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const files_service_1 = require("../files/files.service");
const typeorm_2 = require("typeorm");
const device_entity_1 = require("./device.entity");
const deviceDto_1 = require("./dto/deviceDto");
let DeviceService = class DeviceService {
    constructor(deviceRepository, fileService) {
        this.deviceRepository = deviceRepository;
        this.fileService = fileService;
    }
    async createDevice(createDeviceDto, img) {
        const newDevice = new device_entity_1.DeviceEntity();
        const fileName = await this.fileService.createFile(img);
        Object.assign(newDevice, createDeviceDto);
        return await this.deviceRepository.save(Object.assign(Object.assign({}, newDevice), { img: fileName }));
    }
    async getAllDevices(query) {
        let { brandId, typeId, page, limit } = query;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;
        let devices;
        if (!brandId && !typeId) {
            devices = await this.deviceRepository.find({
                take: limit,
                skip: offset,
            });
        }
        if (brandId && !typeId) {
            devices = await this.deviceRepository.find({
                where: { brandId },
                take: limit,
                skip: offset,
            });
        }
        if (!brandId && typeId) {
            devices = await this.deviceRepository.find({
                where: { typeId },
                take: limit,
                skip: offset,
            });
        }
        if (brandId && typeId) {
            devices = await this.deviceRepository.find({
                where: { typeId, brandId },
                take: limit,
                skip: offset,
            });
        }
        return devices;
    }
    async getOneDevice(id) {
        return await this.deviceRepository.findOne(id);
    }
    async deleteDevice(id) {
        return await this.deviceRepository.delete(id);
    }
    async updateDevice(id, createDeviceDto, img) {
        const fileName = await this.fileService.createFile(img);
        const device = await this.deviceRepository.findOne(id);
        if (!device) {
            throw new common_1.HttpException('Article does not exist', common_1.HttpStatus.NOT_FOUND);
        }
        Object.assign(device, createDeviceDto);
        return await this.deviceRepository.save(Object.assign(Object.assign({}, device), { img: fileName }));
    }
};
__decorate([
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deviceDto_1.DeviceQueryParams]),
    __metadata("design:returntype", Promise)
], DeviceService.prototype, "getAllDevices", null);
DeviceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(device_entity_1.DeviceEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        files_service_1.FilesService])
], DeviceService);
exports.DeviceService = DeviceService;
//# sourceMappingURL=device.service.js.map