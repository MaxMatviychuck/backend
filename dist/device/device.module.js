"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const files_module_1 = require("../files/files.module");
const admin_role_guard_1 = require("../user/guards/admin-role.guard");
const auth_guard_1 = require("../user/guards/auth.guard");
const user_entity_1 = require("../user/user.entity");
const user_service_1 = require("../user/user.service");
const device_controller_1 = require("./device.controller");
const device_entity_1 = require("./device.entity");
const device_service_1 = require("./device.service");
let DeviceModule = class DeviceModule {
};
DeviceModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([device_entity_1.DeviceEntity, user_entity_1.UserEntity]), files_module_1.FilesModule],
        controllers: [device_controller_1.DeviceController],
        providers: [device_service_1.DeviceService, user_service_1.UserService, auth_guard_1.AuthGuard, admin_role_guard_1.AdminRoleGuard],
    })
], DeviceModule);
exports.DeviceModule = DeviceModule;
//# sourceMappingURL=device.module.js.map