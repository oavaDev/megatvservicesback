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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnected = exports.connect = void 0;
require('dotenv').config();
const mongoose_1 = __importDefault(require("mongoose"));
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    const mongoUri = process.env.APP_MONGO_URI || '';
    mongoose_1.default.set('strictQuery', false);
    mongoose_1.default.connect(mongoUri);
    mongoose_1.default.connection.once('open', () => {
        console.log('Connection with database OK');
    });
    mongoose_1.default.connection.on('disconnected', () => {
        console.log('Disconnected succesfully');
    });
    mongoose_1.default.connection.on('error', () => {
        console.log('There was an error');
    });
    yield mongoose_1.default.connect(mongoUri);
});
exports.connect = connect;
function disconnected() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose_1.default.disconnect();
    });
}
exports.disconnected = disconnected;
