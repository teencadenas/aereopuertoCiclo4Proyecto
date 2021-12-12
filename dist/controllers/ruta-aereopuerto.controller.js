"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RutaAereopuertoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let RutaAereopuertoController = class RutaAereopuertoController {
    constructor(rutaRepository) {
        this.rutaRepository = rutaRepository;
    }
    async getAereopuerto(id) {
        return this.rutaRepository.destinofk(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/rutas/{id}/aereopuerto', {
        responses: {
            '200': {
                description: 'Aereopuerto belonging to Ruta',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Aereopuerto) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RutaAereopuertoController.prototype, "getAereopuerto", null);
RutaAereopuertoController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.RutaRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.RutaRepository])
], RutaAereopuertoController);
exports.RutaAereopuertoController = RutaAereopuertoController;
//# sourceMappingURL=ruta-aereopuerto.controller.js.map