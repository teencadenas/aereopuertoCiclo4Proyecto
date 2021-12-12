"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VueloController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let VueloController = class VueloController {
    constructor(vueloRepository) {
        this.vueloRepository = vueloRepository;
    }
    async create(vuelo) {
        return this.vueloRepository.create(vuelo);
    }
    async count(where) {
        return this.vueloRepository.count(where);
    }
    async find(filter) {
        return this.vueloRepository.find(filter);
    }
    async updateAll(vuelo, where) {
        return this.vueloRepository.updateAll(vuelo, where);
    }
    async findById(id, filter) {
        return this.vueloRepository.findById(id, filter);
    }
    async updateById(id, vuelo) {
        await this.vueloRepository.updateById(id, vuelo);
    }
    async replaceById(id, vuelo) {
        await this.vueloRepository.replaceById(id, vuelo);
    }
    async deleteById(id) {
        await this.vueloRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/vuelos'),
    (0, rest_1.response)(200, {
        description: 'Vuelo model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Vuelo) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vuelo, {
                    title: 'NewVuelo',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VueloController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/vuelos/count'),
    (0, rest_1.response)(200, {
        description: 'Vuelo model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Vuelo)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VueloController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/vuelos'),
    (0, rest_1.response)(200, {
        description: 'Array of Vuelo model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Vuelo, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Vuelo)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VueloController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/vuelos'),
    (0, rest_1.response)(200, {
        description: 'Vuelo PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vuelo, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Vuelo)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Vuelo, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VueloController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/vuelos/{id}'),
    (0, rest_1.response)(200, {
        description: 'Vuelo model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vuelo, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Vuelo, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VueloController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/vuelos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Vuelo PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vuelo, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Vuelo]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VueloController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/vuelos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Vuelo PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Vuelo]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VueloController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/vuelos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Vuelo DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VueloController.prototype, "deleteById", null);
VueloController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.VueloRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.VueloRepository])
], VueloController);
exports.VueloController = VueloController;
//# sourceMappingURL=vuelo.controller.js.map