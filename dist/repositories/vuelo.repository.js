"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VueloRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let VueloRepository = class VueloRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.Vuelo, dataSource);
    }
};
VueloRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.mongo')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.MongoDataSource])
], VueloRepository);
exports.VueloRepository = VueloRepository;
//# sourceMappingURL=vuelo.repository.js.map