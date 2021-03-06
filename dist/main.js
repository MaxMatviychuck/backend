"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const path_1 = require("path");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: {
            origin: 'http://localhost:3000',
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            preflightContinue: false,
            optionsSuccessStatus: 204,
        },
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('NestJs Shop API Doc')
        .setDescription('API Doc')
        .setVersion('1.0.0')
        .addTag('Max Great Api')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('', app, document);
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'dist/static'));
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map