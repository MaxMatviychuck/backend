"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const common_1 = require("@nestjs/common");
const type_1 = require("../type");
const Role = (...roles) => (0, common_1.SetMetadata)(type_1.ROLE_KEY, roles);
exports.Role = Role;
//# sourceMappingURL=role.decorator.js.map