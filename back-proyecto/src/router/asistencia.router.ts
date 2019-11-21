import { Router } from "express";
import AsistenciaController from "./../controller/asistencia.controller"
const asistencia = Router();

asistencia.get('/asistencia', AsistenciaController.getInstance().getAll);
asistencia.get('/asistencia/:id', AsistenciaController.getInstance().getSingle);
asistencia.get('/asistencia/curso/:id', AsistenciaController.getInstance().getAsistencia);
asistencia.post('/asistencia', AsistenciaController.getInstance().create);
asistencia.post('/asistencia/estudiante', AsistenciaController.getInstance().createAsistencia);
asistencia.delete('/asistencia/:id', AsistenciaController.getInstance().delete);

export default asistencia;