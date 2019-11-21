"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var asistencia_controller_1 = __importDefault(require("./../controller/asistencia.controller"));
var asistencia = express_1.Router();
asistencia.get('/asistencia', asistencia_controller_1.default.getInstance().getAll);
asistencia.get('/asistencia/:id', asistencia_controller_1.default.getInstance().getSingle);
asistencia.get('/asistencia/curso/:id', asistencia_controller_1.default.getInstance().getAsistencia);
asistencia.post('/asistencia', asistencia_controller_1.default.getInstance().create);
asistencia.post('/asistencia/estudiante', asistencia_controller_1.default.getInstance().createAsistencia);
asistencia.delete('/asistencia/:id', asistencia_controller_1.default.getInstance().delete);
exports.default = asistencia;
