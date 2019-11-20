import { Request, Response } from 'express';
import MySQL from "./../mysql/mysql";

export default class RespuestaController {
    private static _instance: RespuestaController;

    constructor() {
    }

    public static getInstance() {
        return this._instance || ( this._instance = new this() );
    }

    getAll = (req: Request, res: Response) => {
        const query = `
            SELECT * FROM Respuesta
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
            SELECT Evaluacion.nombre, SUM(Respuesta.punteo) AS punteo FROM fase2.respuesta
            INNER JOIN evaluacion ON respuesta.idEvaluacion = evaluacion.idEvaluacion
            WHERE respuesta.idUsuario = ?
            group by respuesta.idEvaluacion;
        `;

        let body = {
            idUsuario : req.params.id
        }

        MySQL.sendQuery(query, body.idUsuario, (err:any, data:Object[]) => {
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

    create = (req: Request, res: Response) => {
        const query = `
            INSERT INTO Respuesta(respuesta, punteo, idPregunta, idEvaluacion, idUsuario)
            VALUES(?, ?, ?, ?, ?)
        `;

        let body = {
            respuesta: req.body.respuesta,
            punteo: req.body.punteo,
            idPregunta: req.body.idPregunta,
            idEvaluacion: req.body.idEvaluacion,
            idUsuario: req.body.idUsuario,
        }
        
        MySQL.sendQuery(query, 
            [body.respuesta, body.punteo, body.idPregunta, body.idEvaluacion, body.idUsuario], 
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

}