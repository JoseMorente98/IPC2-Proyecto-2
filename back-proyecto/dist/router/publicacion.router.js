"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var publicacion_controller_1 = __importDefault(require("./../controller/publicacion.controller"));
var publicacion = express_1.Router();
publicacion.get('/publicacion', publicacion_controller_1.default.getInstance().getAll);
publicacion.get('/publicacion/:id', publicacion_controller_1.default.getInstance().getSingle);
publicacion.get('/publicacion/:id/:id2', publicacion_controller_1.default.getInstance().getMeGusta);
publicacion.post('/publicacion', publicacion_controller_1.default.getInstance().create);
publicacion.post('/publicacion/megusta', publicacion_controller_1.default.getInstance().createMeGusta);
publicacion.put('/publicacion/:id', publicacion_controller_1.default.getInstance().update);
publicacion.delete('/publicacion/:id', publicacion_controller_1.default.getInstance().delete);
publicacion.delete('/publicacion/megusta/:id', publicacion_controller_1.default.getInstance().deleteMeGusta);
publicacion.post('/comentario', publicacion_controller_1.default.getInstance().createComentario);
publicacion.get('/comentario/:id', publicacion_controller_1.default.getInstance().getComentarioByPublicacion);
exports.default = publicacion;
