"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBuildingHandler = exports.showBuildingsHandler = exports.showBuildingHandler = exports.createBuildingHandler = void 0;
const building_service_1 = require("./building.service");
const createBuildingHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        const building = yield (0, building_service_1.createBuilding)(data);
        return res
            .status(201)
            .json({ message: 'Building created succesfully', data: building });
    }
    catch (error) {
        return res.status(400).json({
            message: 'Building could not be created ',
            error: error.message,
        });
    }
});
exports.createBuildingHandler = createBuildingHandler;
const showBuildingsHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const buildings = yield (0, building_service_1.showBuildings)();
        if (!buildings) {
            throw new Error('Buildings not found');
        }
        return res
            .status(201)
            .json({ message: 'Buildings found', data: buildings });
    }
    catch (error) {
        return res.status(400).json({
            message: 'Buildings could not be found',
            error: error.message,
        });
    }
});
exports.showBuildingsHandler = showBuildingsHandler;
const showBuildingHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { buildingId } = req.params;
    try {
        const building = yield (0, building_service_1.showBuilding)(buildingId);
        if (!building) {
            throw new Error('Building does not exist');
        }
        return res.status(201).json({ message: 'Building found', data: building });
    }
    catch (error) {
        return res.status(400).json({
            message: 'Building could not be found',
            error: error.message,
        });
    }
});
exports.showBuildingHandler = showBuildingHandler;
const deleteBuildingHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { buildingId } = req.params;
    const building = yield (0, building_service_1.showBuilding)(buildingId);
    if (!building) {
        return res.status(400).json({ error: 'Building is not valid' });
    }
    try {
        yield (0, building_service_1.deleteBuilding)(buildingId);
        return res.status(201).json({ message: 'Product deleted succesfully' });
    }
    catch (error) {
        return res.status(400).json({
            message: 'Building could not be deleted',
            error: error.message,
        });
    }
});
exports.deleteBuildingHandler = deleteBuildingHandler;
