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
exports.BrandEntity = void 0;
const device_entity_1 = require("../device/device.entity");
const type_entity_1 = require("../type/type.entity");
const typeorm_1 = require("typeorm");
let BrandEntity = class BrandEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BrandEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BrandEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => device_entity_1.DeviceEntity, (device) => device.id),
    __metadata("design:type", Array)
], BrandEntity.prototype, "devices", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => type_entity_1.TypeEntity, (type) => type.brands),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], BrandEntity.prototype, "types", void 0);
BrandEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'brand' })
], BrandEntity);
exports.BrandEntity = BrandEntity;
//# sourceMappingURL=brand.entity.js.map