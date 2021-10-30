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
exports.BrandController = void 0;
const common_1 = require("@nestjs/common");
const role_decorator_1 = require("../user/decorators/role.decorator");
const admin_role_guard_1 = require("../user/guards/admin-role.guard");
const auth_guard_1 = require("../user/guards/auth.guard");
const type_1 = require("../user/type");
const brand_service_1 = require("./brand.service");
const brandDto_1 = require("./dto/brandDto");
let BrandController = class BrandController {
    constructor(brandService) {
        this.brandService = brandService;
    }
    async createBrand(createBrandDto) {
        return this.brandService.createBrand(createBrandDto);
    }
    async getAllBrands() {
        return this.brandService.getAllBrands();
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, role_decorator_1.Role)(type_1.Roles.ADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_role_guard_1.AdminRoleGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [brandDto_1.CreateBrandDto]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "createBrand", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "getAllBrands", null);
BrandController = __decorate([
    (0, common_1.Controller)('/brand'),
    __metadata("design:paramtypes", [brand_service_1.BrandService])
], BrandController);
exports.BrandController = BrandController;
//# sourceMappingURL=brand.controller.js.map