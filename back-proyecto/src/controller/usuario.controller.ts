import { Request, Response } from 'express';
import MySQL from "./../mysql/mysql";
const nodemailer = require('nodemailer');

export default class UsuarioController {
    private static _instance: UsuarioController;

    constructor() {
    }

    public static getInstance() {
        return this._instance || ( this._instance = new this() );
    }

    getAll = (req: Request, res: Response) => {
        const query = `
            SELECT Usuario.idUsuario, Usuario.carnet, Usuario.dpi, Usuario.nombre, Usuario.apellido, Usuario.email 
            FROM Usuario
        `;

        MySQL.getQuery(query, (err:any, data:Object[]) => {
            if(err) {
                res.json([]);
            } else {
                res.json(data)
            }
        })
    }

    getAllAdmin = (req: Request, res: Response) => {
        const query = `
            SELECT Usuario.idUsuario, Usuario.carnet, Usuario.dpi, Usuario.nombre, Usuario.apellido, Usuario.email,
            TipoUsuario.nombre as 'tipo'
            FROM DetalleUsuario
            INNER JOIN Usuario ON DetalleUsuario.idUsuario = Usuario.idUsuario
            INNER JOIN TipoUsuario ON DetalleUsuario.idTipoUsuario = TipoUsuario.idTipoUsuario
            WHERE TipoUsuario.idTipoUsuario = 1;
        `;

        MySQL.getQuery(query, (err:any, data:Object[]) => {
            if(err) {
                res.json([]);
            } else {
                res.json(data)
            }
        })
    }

    getAllAuxiliar = (req: Request, res: Response) => {
        const query = `
            SELECT Usuario.idUsuario, Usuario.carnet, Usuario.dpi, Usuario.nombre, Usuario.apellido, Usuario.email,
            TipoUsuario.nombre as 'tipo'
            FROM DetalleUsuario
            INNER JOIN Usuario ON DetalleUsuario.idUsuario = Usuario.idUsuario
            INNER JOIN TipoUsuario ON DetalleUsuario.idTipoUsuario = TipoUsuario.idTipoUsuario
            WHERE TipoUsuario.idTipoUsuario = 2;
        `;

        MySQL.getQuery(query, (err:any, data:Object[]) => {
            if(err) {
                res.json([]);
            } else {
                res.json(data)
            }
        })
    }

    getAllEstudiante = (req: Request, res: Response) => {
        const query = `
            SELECT Usuario.idUsuario, Usuario.carnet, Usuario.dpi, Usuario.nombre, Usuario.apellido, Usuario.email,
            TipoUsuario.nombre as 'tipo'
            FROM DetalleUsuario
            INNER JOIN Usuario ON DetalleUsuario.idUsuario = Usuario.idUsuario
            INNER JOIN TipoUsuario ON DetalleUsuario.idTipoUsuario = TipoUsuario.idTipoUsuario
            WHERE TipoUsuario.idTipoUsuario = 3;
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
            SELECT *
            FROM Usuario WHERE idUsuario = ?;
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
                res.json(data[0])
            }
        })
    }

    create = (req: Request, res: Response) => {
        const query = `
            CALL SP_CreateUsuario(?, ?, ?, ?, ?, ?, ?);
        `;

        let body = {
            carnet: req.body.carnet,
            dpi: req.body.dpi,
            email: req.body.email,
            password: req.body.password,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            idTipoUsuario: req.body.idTipoUsuario,
        }
        
        MySQL.sendQuery(query, 
            [body.carnet, body.dpi, body.email, body.password, body.nombre, body.apellido, body.idTipoUsuario], 
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

    auth = (req: Request, res: Response) => {
        const query = `
            CALL SP_Autenticar(?, ?);
        `;

        let body = {
            email: req.body.email,
            password: req.body.password
        }
        
        MySQL.sendQuery(query, 
            [body.email, body.password], 
            (err:any, data:Object[]) => {
            if(err) {
                res.status(400).json({
                    ok: false,
                    status: 400,
                    error: err
                });
            } else {
                console.log(data[0])
                res.json(data[0])
            }
        })
    }

    update = (req: Request, res: Response) => {
        let data = {
            id: req.params.id,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: req.body.password,
            dpi: req.body.dpi,
            carnet: req.body.carnet,
        }
    
        const query = `
            UPDATE Usuario SET nombre = ?, apellido = ?, email = ?,
                password = ?, dpi = ?, carnet = ?
                WHERE idUsuario = ?;
        `;
    
        MySQL.sendQuery(query, 
            [data.nombre, data.apellido, data.email, data.password, data.dpi, data.carnet, data.id],
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

    updatePassword = (req: Request, res: Response) => {
        let data = {
            id: req.params.id,
            password: req.body.password,
        }
    
        const query = `
            UPDATE Usuario SET password = ?, estado = 0
                WHERE idUsuario = ?;
        `;
    
        MySQL.sendQuery(query, 
            [data.password, data.id],
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
            DELETE FROM Usuario WHERE idUsuario = ?;
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

    recoveryPassword = (req: Request, res: Response) => {
        let data1 = {
            email: req.body.email
        }
    
        const query = `
            CALL SP_RecoveryPassword(?);
        `;

        MySQL.sendQuery(query, [data1.email],
            (err:any, data:Object[]) => {
            if(err) {
                res.status(400).json({
                    ok: false,
                    status: 400,
                    error: err
                });
            } else {
                //console.log(JSON.parse(JSON.stringify(data[0])))
                let dataQuery = JSON.parse(JSON.stringify(data[0]))
                //console.log("QUERY ",dataQuery[0])
                if(dataQuery[0]._existe == '0') {
                    res.status(400).json({
                        ok: false,
                        status: 400
                    });
                } else {
                    let transporter = nodemailer.createTransport({
                        service: 'Gmail',
                        auth: {
                            user: 'josemorenteg98@gmail.com',
                            pass: 'rvliefzecigjpgjw'
                        }
                    });

                    transporter.sendMail({
                        from: '"Administrador USAC" <josemorenteg98@gmail.com>', // sender address
                        to: 'josemorenteg98@gmail.com', // list of receivers
                        subject: 'Recuperación de Contraseña', // Subject line
                        text: 'Recuperación de Contraseña', // plain text body
                        html: `
                        <body style="font-family: Arial;">
                        <div style="text-align: center;">
                            <h1>Hola ${JSON.parse(JSON.stringify(data[0]))[0].nombre} ${JSON.parse(JSON.stringify(data[0]))[0].apellido}</h1>
                            <p>Recientemente hemos recibido una solicitud para cambiar tu contraseña. Tu correo es:</p>
                            <p style="background-color: #4CAF50;
                            border: none;
                            color: white;
                            padding: 15px 32px;
                            text-align: center;
                            text-decoration: none;
                            display: inline-block;
                            font-size: 16px;">${JSON.parse(JSON.stringify(data[0]))[0].email}</p>
                            <p>Tu nueva contraseña es:</p>
                            <p style="background-color: #4CAF50; 
                            border: none;
                            color: white;
                            padding: 15px 32px;
                            text-align: center;
                            text-decoration: none;
                            display: inline-block;
                            font-size: 16px;">usac12345</p>            
                        </div>
                        </body>`
                    }, (error:any, info:any) => {
                        if (error){
                            console.log(error);
                            res.json({
                                ok: false,
                                status: 500,
                                err: error
                            })
                        } else {
                            console.log("Correo Enviado :D");
                            res.json({
                                ok: false,
                                status: 200,
                                data: info
                            })
                        }
                    });
                }
                
            }
        })

    }
}