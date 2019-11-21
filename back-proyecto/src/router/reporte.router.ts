import { Router } from "express";
import ReporteController from "./../controller/reporte.controller"
const reporte = Router();

reporte.post('/reporte1', ReporteController.getInstance().getReporte1);
reporte.post('/reporte2', ReporteController.getInstance().getReporte2);
reporte.post('/reporte3', ReporteController.getInstance().getReporte3);
reporte.post('/reporte4', ReporteController.getInstance().getReporte4);
reporte.post('/reporte6', ReporteController.getInstance().getReporte6);
reporte.post('/reporte7', ReporteController.getInstance().getReporte7);

export default reporte;