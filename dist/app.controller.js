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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    appRunningMessage() {
        return 'App is running!! 🎉';
    }
    async consultarDeputados() {
        return this.appService.consultarDeputados();
    }
    async procurarDeputado(id) {
        return this.appService.procurarDeputado(id);
    }
    async consultarDespesas(id, pagina, ano, itens, ordenarPor, ordem, response) {
        const res = await this.appService.consultarDespesas({
            id,
            pagina,
            ano,
            itens,
            ordenarPor,
            ordem,
        });
        return response
            .set({ 'x-total-count': res.headers['x-total-count'] })
            .json(res.data);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "appRunningMessage", null);
__decorate([
    (0, common_1.Get)('deputados'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "consultarDeputados", null);
__decorate([
    (0, common_1.Get)('deputados/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "procurarDeputado", null);
__decorate([
    (0, common_1.Get)('deputados/:id/despesas'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('pagina')),
    __param(2, (0, common_1.Query)('ano')),
    __param(3, (0, common_1.Query)('itens')),
    __param(4, (0, common_1.Query)('ordenarPor')),
    __param(5, (0, common_1.Query)('ordem')),
    __param(6, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "consultarDespesas", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map