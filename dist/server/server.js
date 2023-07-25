"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("../config/db");
const envConfig_1 = require("../config/envConfig");
const corsConfig_1 = require("../config/corsConfig");
const app = (0, express_1.default)();
const port = envConfig_1.environmentConfig.SERVER_PORT;
// cors middleware 
app.use((0, corsConfig_1.configureCors)());
// import route
const userRoute_1 = __importDefault(require("../routes/userRoute"));
// Pass the io object to req.app
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/v1', userRoute_1.default);
app.get('/', (req, res) => {
    res.send("Welcome");
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
