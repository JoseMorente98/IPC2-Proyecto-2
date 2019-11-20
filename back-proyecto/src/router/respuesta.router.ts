import { Router } from "express";
import RespuestaController from "./../controller/respuesta.controller"
const respuesta = Router();

respuesta.get('/respuesta', RespuestaController.getInstance().getAll);
respuesta.get('/respuesta/:id', RespuestaController.getInstance().getSingle);
respuesta.post('/respuesta', RespuestaController.getInstance().create);

export default respuesta;