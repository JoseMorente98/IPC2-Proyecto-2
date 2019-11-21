import { Request, Response } from 'express';
import MySQL from "./../mysql/mysql";

export default class PublicacionController {
    private static _instance: PublicacionController;

    constructor() {
    }

    public static getInstance() {
        return this._instance || ( this._instance = new this() );
    }

    getAll = (req: Request, res: Response) => {
        const query = `
            SELECT * FROM Publicacion
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
            SELECT * FROM Publicacion WHERE idPublicacion = ?
        `;

        let body = {
            idPublicacion : req.params.id
        }

        MySQL.sendQuery(query, body.idPublicacion, (err:any, data:Object[]) => {
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

    getComentarioByPublicacion = (req: Request, res: Response) => {
        const query = `
            SELECT Usuario.nombre, Usuario.apellido, comentario, idPublicacion
            FROM Comentario
            INNER JOIN Usuario ON Comentario.idUsuario = Usuario.idUsuario
            WHERE idPublicacion = ?
        `;

        let body = {
            idPublicacion : req.params.id
        }

        MySQL.sendQuery(query, body.idPublicacion, (err:any, data:Object[]) => {
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

    getMeGusta = (req: Request, res: Response) => {
        const query = `
            SELECT * FROM fase2.megusta
            WHERE idUsuario = ? AND idPublicacion = ?;
        `;

        let body = {
            idUsuario : req.params.id,
            idPublicacion : req.params.id2,
        }

        MySQL.sendQuery(query, [body.idUsuario, body.idPublicacion], (err:any, data:Object[]) => {
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
            INSERT INTO Publicacion(titulo, descripcion, imagen, video, idUsuario) VALUES(?, ?, ?, ?, ?)
        `;

        let body = {
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            imagen: req.body.imagen,
            video: req.body.video,
            idUsuario: req.body.idUsuario,
        }
        
        MySQL.sendQuery(query, 
            [body.titulo, body.descripcion, body.imagen, body.video, body.idUsuario], 
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

    createComentario = (req: Request, res: Response) => {
        const query = `
            INSERT INTO Comentario(comentario, idUsuario, idPublicacion) VALUES(?, ?, ?)
        `;

        let body = {
            comentario: req.body.comentario,
            idUsuario: req.body.idUsuario,
            idPublicacion: req.body.idPublicacion,
        }
        
        MySQL.sendQuery(query, 
            [body.comentario, body.idUsuario, body.idPublicacion], 
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

    createMeGusta = (req: Request, res: Response) => {
        const query = `
            CALL SP_CreateMeGusta(?, ?)
        `;

        let body = {
            idUsuario: req.body.idUsuario,
            idPublicacion: req.body.idPublicacion
        }
        
        MySQL.sendQuery(query, 
            [body.idUsuario, body.idPublicacion], 
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
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            imagen: req.body.imagen,
            video: req.body.video,
            idPublicacion: req.params.id,
        }
    
        const query = `
            UPDATE Publicacion SET titulo = ?, descripcion = ?, imagen = ?, video = ?
            WHERE idPublicacion = ?;
        `;
    
        MySQL.sendQuery(query, 
            [body.titulo, body.descripcion, body.imagen, body.video, body.idPublicacion],
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
            DELETE FROM Publicacion WHERE idPublicacion = ?;
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

    deleteMeGusta = (req: Request, res: Response) => {
        const id = req.params.id;

        const query = `
            DELETE FROM MeGusta WHERE idMeGusta = ?;
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