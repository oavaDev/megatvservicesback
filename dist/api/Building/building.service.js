"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBuilding = exports.showBuilding = exports.showBuildings = exports.createBuilding = void 0;
const building_model_1 = __importDefault(require("./building.model"));
const createBuilding = (data) => {
    return building_model_1.default.create(data);
};
exports.createBuilding = createBuilding;
const showBuildings = () => {
    return building_model_1.default.find();
};
exports.showBuildings = showBuildings;
const showBuilding = (id) => {
    return building_model_1.default.findById(id);
};
exports.showBuilding = showBuilding;
const deleteBuilding = (id) => {
    return building_model_1.default.findByIdAndDelete(id);
};
exports.deleteBuilding = deleteBuilding;
