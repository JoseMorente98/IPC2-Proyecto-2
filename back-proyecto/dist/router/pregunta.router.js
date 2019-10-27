"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var pregunta_controller_1 = __importDefault(require("./../controller/pregunta.controller"));
var pregunta = express_1.Router();
pregunta.get('/pregunta', pregunta_controller_1.default.getInstance().getAll);
pregunta.get('/pregunta/:id', pregunta_controller_1.default.getInstance().getSingle);
pregunta.get('/pregunta/evaluacion/:id', pregunta_controller_1.default.getInstance().getByEvaluacion);
pregunta.get('/pregunta/aleatorio/:id', pregunta_controller_1.default.getInstance().getByEvaluacionAleatorio);
pregunta.post('/pregunta', pregunta_controller_1.default.getInstance().create);
pregunta.put('/pregunta/:id', pregunta_controller_1.default.getInstance().update);
pregunta.delete('/pregunta/:id', pregunta_controller_1.default.getInstance().delete);
exports.default = pregunta;
