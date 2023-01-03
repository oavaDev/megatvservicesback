"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const building_route_1 = __importDefault(require("./api/building/building.route"));
const routes = (app) => {
    app.use(building_route_1.default);
};
exports.default = routes;
