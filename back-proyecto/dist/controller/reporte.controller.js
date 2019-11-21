"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("./../mysql/mysql"));
var ReporteController = /** @class */ (function () {
    function ReporteController() {
        this.getReporte1 = function (req, res) {
            var query = "\n            SELECT  Usuario.carnet, Usuario.nombre, Usuario.apellido, DetalleCurso.Semestre, DetalleCurso.Anio, \n            DetalleCurso.horaInicio,DetalleCurso.horaFin, Curso.nombre as 'curso', Seccion.nombre as 'seccion'\n            FROM fase2.asignacionestudiante\n            INNER JOIN Usuario ON asignacionestudiante.idUsuario = Usuario.idUsuario\n            INNER JOIN DetalleCurso ON asignacionestudiante.idDetalleCurso = DetalleCurso.idDetalleCurso\n            INNER JOIN Curso ON DetalleCurso.idCurso = Curso.idCurso\n            INNER JOIN Seccion ON DetalleCurso.idSeccion = Seccion.idSeccion\n            WHERE Curso.idCurso = ? OR DetalleCurso.Semestre = ? OR DetalleCurso.Anio = ? OR Seccion.idSeccion = ?\n            OR DetalleCurso.horaInicio = ? OR DetalleCurso.horaFin = ?\n            ORDER BY apellido;\n        ";
            var body = {
                idCurso: req.body.idCurso,
                semestre: req.body.semestre,
                anio: req.body.anio,
                idSeccion: req.body.idSeccion,
                horaInicio: req.body.horaInicio,
                horaFin: req.body.horaFin,
            };
            mysql_1.default.sendQuery(query, [body.idCurso, body.semestre, body.anio, body.idSeccion, body.horaInicio, body.horaFin], function (err, data) {
                if (err) {
                    res.status(400).json({
                        ok: false,
                        status: 400,
                        error: err
                    });
                }
                else {
                    res.json(data);
                }
            });
        };
        this.getReporte2 = function (req, res) {
            var query = "\n            SELECT Usuario.carnet, Usuario.nombre, Usuario.apellido, SUM(NOTA) AS 'nota', actividad.idDetalleCurso,\n            DetalleCurso.Semestre, DetalleCurso.Anio, \n            DetalleCurso.horaInicio,DetalleCurso.horaFin, Curso.nombre as 'curso', Seccion.nombre as 'seccion'\n            FROM fase2.actividadalumno\n            INNER JOIN Usuario ON actividadalumno.idUsuario = Usuario.idUsuario\n            INNER JOIN actividad ON actividadalumno.idactividad = actividad.idactividad\n            INNER JOIN DetalleCurso ON actividad.idDetalleCurso = DetalleCurso.idDetalleCurso\n            INNER JOIN Curso ON DetalleCurso.idCurso = Curso.idCurso\n            INNER JOIN Seccion ON DetalleCurso.idSeccion = Seccion.idSeccion\n            WHERE Curso.idCurso = ? OR DetalleCurso.Semestre = ? OR DetalleCurso.Anio = ? OR Seccion.idSeccion = ?\n            OR DetalleCurso.horaInicio = ? OR DetalleCurso.horaFin = ?\n            GROUP BY actividadalumno.idUsuario\n            ORDER BY Usuario.Apellido;\n        ";
            var body = {
                idCurso: req.body.idCurso,
                semestre: req.body.semestre,
                anio: req.body.anio,
                idSeccion: req.body.idSeccion,
                horaInicio: req.body.horaInicio,
                horaFin: req.body.horaFin,
            };
            mysql_1.default.sendQuery(query, [body.idCurso, body.semestre, body.anio, body.idSeccion, body.horaInicio, body.horaFin], function (err, data) {
                if (err) {
                    res.status(400).json({
                        ok: false,
                        status: 400,
                        error: err
                    });
                }
                else {
                    res.json(data);
                }
            });
        };
        this.getReporte3 = function (req, res) {
            var query = "\n            SELECT asunto, mensaje, ticket.estado, respuesta, Usuario.nombre, Usuario.apellido FROM fase2.ticket\n            INNER JOIN Usuario ON ticket.idUsuario = Usuario.idUsuario\n            WHERE ticket.estado = ?;\n        ";
            var body = {
                estado: req.body.estado
            };
            mysql_1.default.sendQuery(query, [body.estado], function (err, data) {
                if (err) {
                    res.status(400).json({
                        ok: false,
                        status: 400,
                        error: err
                    });
                }
                else {
                    res.json(data);
                }
            });
        };
        this.getReporte4 = function (req, res) {
            var query = "\n            SELECT asunto, mensaje, ticket.estado, respuesta, Usuario.nombre, Usuario.apellido FROM fase2.ticket\n            INNER JOIN Usuario ON ticket.idUsuario = Usuario.idUsuario\n            WHERE ticket.estado = ?;\n        ";
            var body = {
                estado: req.body.estado
            };
            mysql_1.default.sendQuery(query, [body.estado], function (err, data) {
                if (err) {
                    res.status(400).json({
                        ok: false,
                        status: 400,
                        error: err
                    });
                }
                else {
                    res.json(data);
                }
            });
        };
        this.getReporte5 = function (req, res) {
            var query = "\n            SELECT asunto, mensaje, ticket.estado, respuesta, Usuario.nombre, Usuario.apellido FROM fase2.ticket\n            INNER JOIN Usuario ON ticket.idUsuario = Usuario.idUsuario\n            WHERE ticket.estado = ?;\n        ";
            var body = {
                estado: req.body.estado
            };
            mysql_1.default.sendQuery(query, [body.estado], function (err, data) {
                if (err) {
                    res.status(400).json({
                        ok: false,
                        status: 400,
                        error: err
                    });
                }
                else {
                    res.json(data);
                }
            });
        };
        this.getReporte6 = function (req, res) {
            var query = "\n            SELECT COUNT(*) as cantidad, Publicacion.titulo, Publicacion.descripcion, Publicacion.imagen, Publicacion.video, Publicacion.idPublicacion,\n            Usuario.nombre, Usuario.apellido FROM fase2.megusta\n            INNER JOIN Publicacion ON megusta.idPublicacion = publicacion.idPublicacion\n            INNER JOIN Usuario ON Publicacion.idUsuario = Usuario.idUsuario\n            WHERE Usuario.idUsuario = ?\n            UNION ALL\n            SELECT 0 as cantidad, titulo, descripcion, imagen, video, idPublicacion, Usuario.nombre, Usuario.apellido FROM fase2.publicacion\n            INNER JOIN Usuario ON publicacion.idUsuario = Usuario.idUsuario\n            WHERE Usuario.idUsuario = ?\n            GROUP BY idPublicacion;\n        ";
            var body = {
                idUsuario: req.body.idUsuario,
                idUsuario2: req.body.idUsuario,
            };
            mysql_1.default.sendQuery(query, [body.idUsuario, body.idUsuario2], function (err, data) {
                if (err) {
                    res.status(400).json({
                        ok: false,
                        status: 400,
                        error: err
                    });
                }
                else {
                    res.json(data);
                }
            });
        };
        this.getReporte7 = function (req, res) {
            var query = "\n            SELECT COUNT(*) as cantidad, tipo, DetalleCurso.Semestre, DetalleCurso.Anio, Asistencia.idAsistencia,\n            DetalleCurso.horaInicio,DetalleCurso.horaFin, Curso.nombre as curso, Seccion.nombre as seccion FROM fase2.detalleasistencia\n            INNER JOIN Asistencia ON detalleasistencia.idAsistencia = asistencia.idAsistencia\n            INNER JOIN DetalleCurso ON asistencia.idDetalleCurso = DetalleCurso.idDetalleCurso\n            INNER JOIN Curso ON DetalleCurso.idCurso = Curso.idCurso\n            INNER JOIN Seccion ON DetalleCurso.idSeccion = Seccion.idSeccion\n            WHERE Curso.idCurso = ? OR DetalleCurso.Semestre = ? OR DetalleCurso.Anio = ? OR Seccion.idSeccion = ?\n            OR DetalleCurso.horaInicio = ? OR DetalleCurso.horaFin = ?\n            GROUP BY tipo;\n        ";
            var body = {
                idCurso: req.body.idCurso,
                semestre: req.body.semestre,
                anio: req.body.anio,
                idSeccion: req.body.idSeccion,
                horaInicio: req.body.horaInicio,
                horaFin: req.body.horaFin,
            };
            mysql_1.default.sendQuery(query, [body.idCurso, body.semestre, body.anio, body.idSeccion, body.horaInicio, body.horaFin], function (err, data) {
                if (err) {
                    res.status(400).json({
                        ok: false,
                        status: 400,
                        error: err
                    });
                }
                else {
                    res.json(data);
                }
            });
        };
    }
    ReporteController.getInstance = function () {
        return this._instance || (this._instance = new this());
    };
    return ReporteController;
}());
exports.default = ReporteController;
