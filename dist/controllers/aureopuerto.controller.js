"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AureopuertoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AureopuertoController = class AureopuertoController {
    constructor(aereopuertoRepository) {
        this.aereopuertoRepository = aereopuertoRepository;
    }
    async create(aereopuerto) {
        return this.aereopuertoRepository.create(aereopuerto);
    }
    async count(where) {
        return this.aereopuertoRepository.count(where);
    }
    async find(filter) {
        return this.aereopuertoRepository.find(filter);
    }
    async updateAll(aereopuerto, where) {
        return this.aereopuertoRepository.updateAll(aereopuerto, where);
    }
    async findById(id, filter) {
        return this.aereopuertoRepository.findById(id, filter);
    }
    async updateById(id, aereopuerto) {
        await this.aereopuertoRepository.updateById(id, aereopuerto);
    }
    async replaceById(id, aereopuerto) {
        await this.aereopuertoRepository.replaceById(id, aereopuerto);
    }
    async deleteById(id) {
        await this.aereopuertoRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/aereopuertos'),
    (0, rest_1.response)(200, {
        description: 'Aereopuerto model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Aereopuerto) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Aereopuerto, {
                    title: 'NewAereopuerto',
                    exclude: ['Id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AureopuertoController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/aereopuertos/count'),
    (0, rest_1.response)(200, {
        description: 'Aereopuerto model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Aereopuerto)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AureopuertoController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/aereopuertos'),
    (0, rest_1.response)(200, {
        description: 'Array of Aereopuerto model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Aereopuerto, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Aereopuerto)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AureopuertoController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/aereopuertos'),
    (0, rest_1.response)(200, {
        description: 'Aereopuerto PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Aereopuerto, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Aereopuerto)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Aereopuerto, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AureopuertoController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/aereopuertos/{id}'),
    (0, rest_1.response)(200, {
        description: 'Aereopuerto model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Aereopuerto, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Aereopuerto, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AureopuertoController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/aereopuertos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Aereopuerto PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Aereopuerto, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Aereopuerto]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AureopuertoController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/aereopuertos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Aereopuerto PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Aereopuerto]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AureopuertoController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/aereopuertos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Aereopuerto DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AureopuertoController.prototype, "deleteById", null);
AureopuertoController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.AereopuertoRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.AereopuertoRepository])
], AureopuertoController);
exports.AureopuertoController = AureopuertoController;
//# sourceMappingURL=aureopuerto.controller.js.map