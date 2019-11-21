import { Router } from "express";
import PublicacionController from "./../controller/publicacion.controller"
const publicacion = Router();

publicacion.get('/publicacion', PublicacionController.getInstance().getAll);
publicacion.get('/publicacion/:id', PublicacionController.getInstance().getSingle);
publicacion.get('/publicacion/:id/:id2', PublicacionController.getInstance().getMeGusta);
publicacion.post('/publicacion', PublicacionController.getInstance().create);
publicacion.post('/publicacion/megusta', PublicacionController.getInstance().createMeGusta);
publicacion.put('/publicacion/:id', PublicacionController.getInstance().update);
publicacion.delete('/publicacion/:id', PublicacionController.getInstance().delete);
publicacion.delete('/publicacion/megusta/:id', PublicacionController.getInstance().deleteMeGusta);
publicacion.post('/comentario', PublicacionController.getInstance().createComentario);
publicacion.get('/comentario/:id', PublicacionController.getInstance().getComentarioByPublicacion);

export default publicacion;