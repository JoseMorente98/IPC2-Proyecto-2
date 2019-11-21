"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var reporte_controller_1 = __importDefault(require("./../controller/reporte.controller"));
var reporte = express_1.Router();
reporte.post('/reporte1', reporte_controller_1.default.getInstance().getReporte1);
reporte.post('/reporte2', reporte_controller_1.default.getInstance().getReporte2);
reporte.post('/reporte3', reporte_controller_1.default.getInstance().getReporte3);
reporte.post('/reporte4', reporte_controller_1.default.getInstance().getReporte4);
reporte.post('/reporte6', reporte_controller_1.default.getInstance().getReporte6);
reporte.post('/reporte7', reporte_controller_1.default.getInstance().getReporte7);
exports.default = reporte;
