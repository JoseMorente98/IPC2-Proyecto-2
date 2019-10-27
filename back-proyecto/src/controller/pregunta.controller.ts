import { Request, Response } from 'express';
import MySQL from "./../mysql/mysql";

export default class PreguntaController {
    private static _instance: PreguntaController;

    constructor() {
    }

    public static getInstance() {
        return this._instance || ( this._instance = new this() );
    }

    getAll = (req: Request, res: Response) => {
        const query = `
            SELECT * FROM Pregunta
        `;

        MySQL.getQuery(query, (err:any, data:Object[]) => {
            if(err) {
                res.json([]);
            } else {
                res.json(data)
            }
        })
    }

    getSingle = (req: Request, res: Response) => {
        const query = `
            SELECT * FROM Pregunta WHERE idPregunta = ?
        `;

        let body = {
            idPregunta : req.params.id
        }

        MySQL.sendQuery(query, body.idPregunta, (err:any, data:Object[]) => {
            if(err) {
                res.status(400).json({
                    ok: false,
                    status: 400,
                    error: err
                });
            } else {
                res.json(data[0])
            }
        })
    }

    getByEvaluacion = (req: Request, res: Response) => {
        const query = `
            SELECT * FROM Pregunta WHERE idEvaluacion = ?
        `;

        let body = {
            idEvaluacion : req.params.id
        }

        MySQL.sendQuery(query, body.idEvaluacion, (err:any, data:Object[]) => {
            if(err) {
                res.status(400).json({
                    ok: false,
                    status: 400,
                    error: err
                });
            } else {
                res.json(data)
            }
        })
    }

    getByEvaluacionAleatorio = (req: Request, res: Response) => {
        const query = `
            CALL SP_MostarPreguntasAleatorio(?);
        `;

        let body = {
            idEvaluacion : req.params.id
        }

        MySQL.sendQuery(query, body.idEvaluacion, (err:any, data:Object[]) => {
            if(err) {
                res.status(400).json({
                    ok: false,
                    status: 400,
                    error: err
                });
            } else {
                res.json(data[0])
            }
        })
    }

    create = (req: Request, res: Response) => {
        const query = `
            INSERT INTO Pregunta(tipoPregunta, pregunta, respuesta1, respuesta2, respuesta3, correcta, punteo, idEvaluacion)
            VALUES(?, ?, ?, ?, ?, ?, ?, ?)
        `;

        let body = {
            tipoPregunta: req.body.tipoPregunta,
            pregunta: req.body.pregunta,
            respuesta1: req.body.respuesta1,
            respuesta2: req.body.respuesta2,
            respuesta3: req.body.respuesta3,
            correcta: req.body.correcta,
            punteo: req.body.punteo,
            idEvaluacion: req.body.idEvaluacion,
        }
        
        MySQL.sendQuery(query, 
            [body.tipoPregunta, body.pregunta, body.respuesta1, body.respuesta2, body.respuesta3, 
                body.correcta, body.punteo, body.idEvaluacion], 
            (err:any, data:Object[]) => {
            if(err) {
                res.status(400).json({
                    ok: false,
                    status: 400,
                    error: err
                });
            } else {
                res.json({
                    ok: true,
                    status: 200
                })
            }
        })
    }

    update = (req: Request, res: Response) => {
        let body = {
            tipoPregunta: req.body.tipoPregunta,
            pregunta: req.body.pregunta,
            respuesta1: req.body.respuesta1,
            respuesta2: req.body.respuesta2,
            respuesta3: req.body.respuesta3,
            correcta: req.body.correcta,
            punteo: req.body.punteo,
            idPregunta: req.params.id,
        }
    
        const query = `
            UPDATE Pregunta SET tipoPregunta = ?, pregunta = ?, respuesta1 = ?, respuesta2 = ?, respuesta3 = ?, correcta = ?, punteo = ?
            WHERE idPregunta = ?;
        `;
    
        MySQL.sendQuery(query, 
            [body.tipoPregunta, body.pregunta, body.respuesta1, body.respuesta2, body.respuesta3, 
                body.correcta, body.punteo, body.idPregunta], 
            (err:any, data:Object[]) => {
            if(err) {
                res.status(400).json({
                    ok: false,
                    status: 400,
                    error: err
                });
            } else {
                res.json({
                    ok: true,
                    status: 200
                })
            }
        })
    }

    delete = (req: Request, res: Response) => {
        const id = req.params.id;

        const query = `
            DELETE FROM Pregunta WHERE idPregunta = ?;
        `;

        MySQL.sendQuery(query, id, (err:any, data:Object[]) => {
            if(err) {
                res.status(400).json({
                    ok: false,
                    status: 400,
                    error: err
                });
            } else {
                res.json({
                    ok: true,
                    status: 200,
                })
            }
        })
    }
}