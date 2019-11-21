import { Request, Response } from 'express';
import MySQL from "./../mysql/mysql";

export default class AsistenciaController {
    private static _instance: AsistenciaController;

    constructor() {
    }

    public static getInstance() {
        return this._instance || ( this._instance = new this() );
    }

    getAll = (req: Request, res: Response) => {
        const query = `
            SELECT * FROM asistencia
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
            SELECT * FROM asistencia WHERE idDetalleCurso = ?
        `;

        let body = {
            idAsistencia : req.params.id
        }

        MySQL.sendQuery(query, body.idAsistencia, (err:any, data:Object[]) => {
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

    getAsistencia = (req: Request, res: Response) => {
        const query = `
            SELECT Usuario.nombre, Usuario.apellido, tipo, idAsistencia FROM fase2.detalleasistencia
            INNER JOIN Usuario ON detalleasistencia.idUsuario = Usuario.idUsuario
            WHERE idAsistencia = ?
        `;

        let body = {
            idAsistencia : req.params.id
        }

        MySQL.sendQuery(query, body.idAsistencia, (err:any, data:Object[]) => {
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
            INSERT INTO Asistencia(fecha, idDetalleCurso) VALUES(NOW(), ?)
        `;

        let body = {
            idDetalleCurso: req.body.idDetalleCurso
        }
        
        MySQL.sendQuery(query, 
            [body.idDetalleCurso], 
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

    createAsistencia = (req: Request, res: Response) => {
        const query = `
            INSERT INTO DetalleAsistencia(tipo, idUsuario, idAsistencia) VALUES(?, ?, ?)
        `;

        let body = {
            idAsistencia: req.body.idAsistencia,
            idUsuario: req.body.idUsuario,
            tipo: req.body.tipo,
        }
        
        MySQL.sendQuery(query, 
            [body.tipo, body.idUsuario, body.idAsistencia], 
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
            DELETE FROM Asistencia WHERE idAsistencia = ?;
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