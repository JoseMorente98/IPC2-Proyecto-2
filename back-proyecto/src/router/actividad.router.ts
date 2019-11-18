import { Router } from "express";
import UsuarioController from "./../controller/actividad.controller"
const actividad = Router();

actividad.get('/actividad', UsuarioController.getInstance().getAll);
actividad.get('/actividad/:id', UsuarioController.getInstance().getSingle);
actividad.get('/notas/:id', UsuarioController.getInstance().getNotas);
actividad.get('/actividad/curso/:id', UsuarioController.getInstance().getAllByAsignacion);
actividad.get('/actividad/tarea/:id/:id2', UsuarioController.getInstance().getEnvioTarea);
actividad.post('/actividad', UsuarioController.getInstance().create);
actividad.post('/actividad/entregar', UsuarioController.getInstance().createEntrega);
actividad.put('/actividad/:id', UsuarioController.getInstance().update);
actividad.delete('/actividad/:id', UsuarioController.getInstance().delete);

export default actividad;