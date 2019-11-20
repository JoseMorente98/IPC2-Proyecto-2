"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var respuesta_controller_1 = __importDefault(require("./../controller/respuesta.controller"));
var respuesta = express_1.Router();
respuesta.get('/respuesta', respuesta_controller_1.default.getInstance().getAll);
respuesta.get('/respuesta/:id', respuesta_controller_1.default.getInstance().getSingle);
respuesta.post('/respuesta', respuesta_controller_1.default.getInstance().create);
exports.default = respuesta;
