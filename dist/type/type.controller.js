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
exports.TypeController = void 0;
const common_1 = require("@nestjs/common");
const role_decorator_1 = require("../user/decorators/role.decorator");
const admin_role_guard_1 = require("../user/guards/admin-role.guard");
const auth_guard_1 = require("../user/guards/auth.guard");
const type_1 = require("../user/type");
const typeDto_1 = require("./dto/typeDto");
const type_service_1 = require("./type.service");
let TypeController = class TypeController {
    constructor(typeService) {
        this.typeService = typeService;
    }
    async createType(createTypeDto) {
        return this.typeService.createType(createTypeDto);
    }
    async getAllTypes() {
        return this.typeService.getAllTypes();
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, role_decorator_1.Role)(type_1.Roles.ADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_role_guard_1.AdminRoleGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeDto_1.CreateTypeDto]),
    __metadata("design:returntype", Promise)
], TypeController.prototype, "createType", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TypeController.prototype, "getAllTypes", null);
TypeController = __decorate([
    (0, common_1.Controller)('/type'),
    __metadata("design:paramtypes", [type_service_1.TypeService])
], TypeController);
exports.TypeController = TypeController;
//# sourceMappingURL=type.controller.js.map