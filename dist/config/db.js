"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const envConfig_1 = require("../config/envConfig");
const dbUrl = envConfig_1.environmentConfig.DB_URL || '';
mongoose_1.default
    .connect(dbUrl)
    .then(() => {
    console.log("Database Connected");
})
    .catch((error) => {
    console.log("Database not connected", error);
});
