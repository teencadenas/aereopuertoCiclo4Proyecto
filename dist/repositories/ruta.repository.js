"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RutaRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let RutaRepository = class RutaRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, aereopuertoRepositoryGetter) {
        super(models_1.Ruta, dataSource);
        this.aereopuertoRepositoryGetter = aereopuertoRepositoryGetter;
        this.destinofk = this.createBelongsToAccessorFor('destinofk', aereopuertoRepositoryGetter);
        this.registerInclusionResolver('destinofk', this.destinofk.inclusionResolver);
        this.A_Origen = this.createBelongsToAccessorFor('A_Origen', aereopuertoRepositoryGetter);
        this.registerInclusionResolver('A_Origen', this.A_Origen.inclusionResolver);
    }
};
RutaRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.mongo')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('AereopuertoRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.MongoDataSource, Function])
], RutaRepository);
exports.RutaRepository = RutaRepository;
//# sourceMappingURL=ruta.repository.js.map