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
exports.DeviceController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const device_service_1 = require("./device.service");
const deviceDto_1 = require("./dto/deviceDto");
const role_decorator_1 = require("../user/decorators/role.decorator");
const type_1 = require("../user/type");
const auth_guard_1 = require("../user/guards/auth.guard");
const admin_role_guard_1 = require("../user/guards/admin-role.guard");
let DeviceController = class DeviceController {
    constructor(deviceService) {
        this.deviceService = deviceService;
    }
    async createDevice(createDeviceDto, img) {
        return this.deviceService.createDevice(createDeviceDto, img);
    }
    async getAllDevices(query) {
        return this.deviceService.getAllDevices(query);
    }
    async getOneDevice(id) {
        return this.deviceService.getOneDevice(id);
    }
    async deleteDevice(id) {
        return this.deviceService.deleteDevice(id);
    }
    async updateDevice(id, updateDeviceDto, img) {
        return this.deviceService.updateDevice(id, updateDeviceDto, img);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, role_decorator_1.Role)(type_1.Roles.ADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_role_guard_1.AdminRoleGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('img')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deviceDto_1.PersistDeviceDto, Object]),
    __metadata("design:returntype", Promise)
], DeviceController.prototype, "createDevice", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deviceDto_1.DeviceQueryParams]),
    __metadata("design:returntype", Promise)
], DeviceController.prototype, "getAllDevices", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DeviceController.prototype, "getOneDevice", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, role_decorator_1.Role)(type_1.Roles.ADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_role_guard_1.AdminRoleGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DeviceController.prototype, "deleteDevice", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, role_decorator_1.Role)(type_1.Roles.ADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_role_guard_1.AdminRoleGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('img')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, deviceDto_1.PersistDeviceDto, Object]),
    __metadata("design:returntype", Promise)
], DeviceController.prototype, "updateDevice", null);
DeviceController = __decorate([
    (0, common_1.Controller)('/device'),
    __metadata("design:paramtypes", [device_service_1.DeviceService])
], DeviceController);
exports.DeviceController = DeviceController;
//# sourceMappingURL=device.controller.js.map