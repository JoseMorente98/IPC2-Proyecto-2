import { Router } from "express";
import PreguntaController from "./../controller/pregunta.controller"
const pregunta = Router();

pregunta.get('/pregunta', PreguntaController.getInstance().getAll);
pregunta.get('/pregunta/:id', PreguntaController.getInstance().getSingle);
pregunta.get('/pregunta/evaluacion/:id', PreguntaController.getInstance().getByEvaluacion);
pregunta.get('/pregunta/aleatorio/:id', PreguntaController.getInstance().getByEvaluacionAleatorio);
pregunta.post('/pregunta', PreguntaController.getInstance().create);
pregunta.put('/pregunta/:id', PreguntaController.getInstance().update);
pregunta.delete('/pregunta/:id', PreguntaController.getInstance().delete);

export default pregunta;