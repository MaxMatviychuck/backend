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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceEntity = void 0;
const brand_entity_1 = require("../brand/brand.entity");
const type_entity_1 = require("../type/type.entity");
const typeorm_1 = require("typeorm");
let DeviceEntity = class DeviceEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DeviceEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DeviceEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], DeviceEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DeviceEntity.prototype, "img", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DeviceEntity.prototype, "info", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], DeviceEntity.prototype, "brandId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], DeviceEntity.prototype, "typeId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => type_entity_1.TypeEntity, (type) => type.id),
    __metadata("design:type", type_entity_1.TypeEntity)
], DeviceEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => brand_entity_1.BrandEntity, (brand) => brand.id),
    __metadata("design:type", brand_entity_1.BrandEntity)
], DeviceEntity.prototype, "brand", void 0);
DeviceEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'device' })
], DeviceEntity);
exports.DeviceEntity = DeviceEntity;
//# sourceMappingURL=device.entity.js.map