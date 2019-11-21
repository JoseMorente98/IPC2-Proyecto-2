import { Request, Response } from 'express';
import MySQL from "./../mysql/mysql";

export default class ReporteController {
    private static _instance: ReporteController;

    constructor() {
    }

    public static getInstance() {
        return this._instance || ( this._instance = new this() );
    }

    getReporte1 = (req: Request, res: Response) => {
        const query = `
            SELECT  Usuario.carnet, Usuario.nombre, Usuario.apellido, DetalleCurso.Semestre, DetalleCurso.Anio, 
            DetalleCurso.horaInicio,DetalleCurso.horaFin, Curso.nombre as 'curso', Seccion.nombre as 'seccion'
            FROM fase2.asignacionestudiante
            INNER JOIN Usuario ON asignacionestudiante.idUsuario = Usuario.idUsuario
            INNER JOIN DetalleCurso ON asignacionestudiante.idDetalleCurso = DetalleCurso.idDetalleCurso
            INNER JOIN Curso ON DetalleCurso.idCurso = Curso.idCurso
            INNER JOIN Seccion ON DetalleCurso.idSeccion = Seccion.idSeccion
            WHERE Curso.idCurso = ? OR DetalleCurso.Semestre = ? OR DetalleCurso.Anio = ? OR Seccion.idSeccion = ?
            OR DetalleCurso.horaInicio = ? OR DetalleCurso.horaFin = ?
            ORDER BY apellido;
        `;

        let body = {
            idCurso : req.body.idCurso,
            semestre : req.body.semestre,
            anio : req.body.anio,
            idSeccion : req.body.idSeccion,
            horaInicio : req.body.horaInicio,
            horaFin : req.body.horaFin,
        }

        MySQL.sendQuery(query, [body.idCurso, body.semestre, body.anio, body.idSeccion, body.horaInicio, body.horaFin], (err:any, data:Object[]) => {
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

    getReporte2 = (req: Request, res: Response) => {
        const query = `
            SELECT Usuario.carnet, Usuario.nombre, Usuario.apellido, SUM(NOTA) AS 'nota', actividad.idDetalleCurso,
            DetalleCurso.Semestre, DetalleCurso.Anio, 
            DetalleCurso.horaInicio,DetalleCurso.horaFin, Curso.nombre as 'curso', Seccion.nombre as 'seccion'
            FROM fase2.actividadalumno
            INNER JOIN Usuario ON actividadalumno.idUsuario = Usuario.idUsuario
            INNER JOIN actividad ON actividadalumno.idactividad = actividad.idactividad
            INNER JOIN DetalleCurso ON actividad.idDetalleCurso = DetalleCurso.idDetalleCurso
            INNER JOIN Curso ON DetalleCurso.idCurso = Curso.idCurso
            INNER JOIN Seccion ON DetalleCurso.idSeccion = Seccion.idSeccion
            WHERE Curso.idCurso = ? OR DetalleCurso.Semestre = ? OR DetalleCurso.Anio = ? OR Seccion.idSeccion = ?
            OR DetalleCurso.horaInicio = ? OR DetalleCurso.horaFin = ?
            GROUP BY actividadalumno.idUsuario
            ORDER BY Usuario.Apellido;
        `;

        let body = {
            idCurso : req.body.idCurso,
            semestre : req.body.semestre,
            anio : req.body.anio,
            idSeccion : req.body.idSeccion,
            horaInicio : req.body.horaInicio,
            horaFin : req.body.horaFin,
        }

        MySQL.sendQuery(query, [body.idCurso, body.semestre, body.anio, body.idSeccion, body.horaInicio, body.horaFin], (err:any, data:Object[]) => {
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

    getReporte3 = (req: Request, res: Response) => {
        const query = `
            SELECT asunto, mensaje, ticket.estado, respuesta, Usuario.nombre, Usuario.apellido FROM fase2.ticket
            INNER JOIN Usuario ON ticket.idUsuario = Usuario.idUsuario
            WHERE ticket.estado = ?;
        `;

        let body = {
            estado : req.body.estado
        }

        MySQL.sendQuery(query, [body.estado], (err:any, data:Object[]) => {
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

    getReporte4 = (req: Request, res: Response) => {
        const query = `
            SELECT asunto, mensaje, ticket.estado, respuesta, Usuario.nombre, Usuario.apellido FROM fase2.ticket
            INNER JOIN Usuario ON ticket.idUsuario = Usuario.idUsuario
            WHERE ticket.estado = ?;
        `;

        let body = {
            estado : req.body.estado
        }

        MySQL.sendQuery(query, [body.estado], (err:any, data:Object[]) => {
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

    getReporte5 = (req: Request, res: Response) => {
        const query = `
            SELECT asunto, mensaje, ticket.estado, respuesta, Usuario.nombre, Usuario.apellido FROM fase2.ticket
            INNER JOIN Usuario ON ticket.idUsuario = Usuario.idUsuario
            WHERE ticket.estado = ?;
        `;

        let body = {
            estado : req.body.estado
        }

        MySQL.sendQuery(query, [body.estado], (err:any, data:Object[]) => {
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

    getReporte6 = (req: Request, res: Response) => {
        const query = `
            SELECT COUNT(*) as cantidad, Publicacion.titulo, Publicacion.descripcion, Publicacion.imagen, Publicacion.video, Publicacion.idPublicacion,
            Usuario.nombre, Usuario.apellido FROM fase2.megusta
            INNER JOIN Publicacion ON megusta.idPublicacion = publicacion.idPublicacion
            INNER JOIN Usuario ON Publicacion.idUsuario = Usuario.idUsuario
            WHERE Usuario.idUsuario = ?
            UNION ALL
            SELECT 0 as cantidad, titulo, descripcion, imagen, video, idPublicacion, Usuario.nombre, Usuario.apellido FROM fase2.publicacion
            INNER JOIN Usuario ON publicacion.idUsuario = Usuario.idUsuario
            WHERE Usuario.idUsuario = ?
            GROUP BY idPublicacion;
        `;

        let body = {
            idUsuario : req.body.idUsuario,
            idUsuario2 : req.body.idUsuario,
        }

        MySQL.sendQuery(query, [body.idUsuario, body.idUsuario2], (err:any, data:Object[]) => {
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

    getReporte7 = (req: Request, res: Response) => {
        const query = `
            SELECT COUNT(*) as cantidad, tipo, DetalleCurso.Semestre, DetalleCurso.Anio, Asistencia.idAsistencia,
            DetalleCurso.horaInicio,DetalleCurso.horaFin, Curso.nombre, Seccion.nombre FROM fase2.detalleasistencia
            INNER JOIN Asistencia ON detalleasistencia.idAsistencia = asistencia.idAsistencia
            INNER JOIN DetalleCurso ON asistencia.idDetalleCurso = DetalleCurso.idDetalleCurso
            INNER JOIN Curso ON DetalleCurso.idCurso = Curso.idCurso
            INNER JOIN Seccion ON DetalleCurso.idSeccion = Seccion.idSeccion
            WHERE Curso.idCurso = ? OR DetalleCurso.Semestre = ? OR DetalleCurso.Anio = ? OR Seccion.idSeccion = ?
            OR DetalleCurso.horaInicio = ? OR DetalleCurso.horaFin = ?
            GROUP BY tipo;
        `;

        let body = {
            idCurso : req.body.idCurso,
            semestre : req.body.semestre,
            anio : req.body.anio,
            idSeccion : req.body.idSeccion,
            horaInicio : req.body.horaInicio,
            horaFin : req.body.horaFin,
        }

        MySQL.sendQuery(query, [body.idCurso, body.semestre, body.anio, body.idSeccion, body.horaInicio, body.horaFin], (err:any, data:Object[]) => {
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

}