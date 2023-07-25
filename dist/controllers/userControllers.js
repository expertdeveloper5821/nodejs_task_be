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
exports.getLatestData = exports.createData = void 0;
const userModels_1 = __importDefault(require("../models/userModels"));
// import { Server } from 'socket.io';
// Post api
const createData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { value, label } = req.body;
        // Check if value and label fields are provided
        if (!value || !label) {
            return res.status(400).json({ error: 'Both value and label fields are required.' });
        }
        // Check if value and label already exist in the database
        const existingData = yield userModels_1.default.findOne({ value, label });
        if (existingData) {
            return res.status(409).json({ error: 'Data with the same value and label already exists.' });
        }
        const newData = new userModels_1.default({ value, label });
        yield newData.save();
        res.status(201).json(newData);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});
exports.createData = createData;
// get api
const getLatestData = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield userModels_1.default.find().sort('-timestamp').limit(10);
        res.json(data);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});
exports.getLatestData = getLatestData;
