"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const express_2 = __importDefault(require("./express"));
const database_1 = require("./database");
const routes_config_1 = __importDefault(require("./routes.config"));
const app = (0, express_1.default)();
app.listen(process.env.APP_PORT || 8080, () => {
    (0, express_2.default)(app);
    (0, database_1.connect)();
    (0, routes_config_1.default)(app);
    console.log(`server listening on http://localhost:${process.env.APP_PORT || 8080}`);
});
exports.default = app;
