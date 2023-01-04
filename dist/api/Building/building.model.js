"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BuildingSchema = new mongoose_1.Schema({
    id: { type: String, required: false },
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postal: { type: String, required: true },
    plans: [{}],
}, { timestamps: true });
const Building = (0, mongoose_1.model)('Building', BuildingSchema);
exports.default = Building;
