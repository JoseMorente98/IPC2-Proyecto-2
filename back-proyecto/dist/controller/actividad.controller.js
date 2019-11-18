"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("./../mysql/mysql"));
var ActividadController = /** @class */ (function () {
    function ActividadController() {
        this.getAll = function (req, res) {
            var query = "\n            SELECT * FROM Actividad\n        ";
            mysql_1.default.getQuery(query, function (err, data) {
                if (err) {
                    res.json([]);
                }
                else {
                    res.json(data);
                }
            });
        };
        this.getSingle = function (req, res) {
            var query = "\n            SELECT * FROM Actividad WHERE idActividad = ?\n        ";
            var body = {
                idCurso: req.params.id
            };
            mysql_1.default.sendQuery(query, body.idCurso, function (err, data) {
                if (err) {
                    res.status(400).json({
                        ok: false,
                        status: 400,
                        error: err
                    });
                }
                else {
                    res.json(data[0]);
                }
            });
        };
        this.getAllByAsignacion = function (req, res) {
            var query = "\n            SELECT * FROM Actividad WHERE idDetalleCurso = ?\n        ";
            var body = {
                idCurso: req.params.id
            };
            mysql_1.default.sendQuery(query, body.idCurso, function (err, data) {
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
        this.getEnvioTarea = function (req, res) {
            var query = "\n            SELECT * FROM fase2.actividadalumno WHERE idActividad = ? AND idUsuario = ?;\n        ";
            var body = {
                idActividad: req.params.id,
                idUsuario: req.params.id2
            };
            mysql_1.default.sendQuery(query, [body.idActividad, body.idUsuario], function (err, data) {
                if (err) {
                    res.status(400).json({
                        ok: false,
                        status: 400,
                        error: err
                    });
                }
                else {
                    res.json(data[0]);
                }
            });
        };
        this.getNotas = function (req, res) {
            var query = "\n            SELECT * FROM fase2.actividadalumno \n            INNER JOIN Actividad ON actividadalumno.idActividad = Actividad.idActividad\n            WHERE idUsuario = ?;\n        ";
            var body = {
                idUsuario: req.params.id
            };
            mysql_1.default.sendQuery(query, body.idUsuario, function (err, data) {
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
        this.create = function (req, res) {
            var query = "\n            INSERT INTO Actividad(idDetalleCurso, nombre, fechaLimite, ponderacion, estado) VALUES(?, ?, ?, ?, ?)\n        ";
            var body = {
                idDetalleCurso: req.body.idDetalleCurso,
                nombre: req.body.nombre,
                fechaLimite: req.body.fechaLimite,
                ponderacion: req.body.ponderacion,
                estado: req.body.estado
            };
            mysql_1.default.sendQuery(query, [body.idDetalleCurso, body.nombre, body.fechaLimite, body.ponderacion, body.estado], function (err, data) {
                if (err) {
                    res.status(400).json({
                        ok: false,
                        status: 400,
                        error: err
                    });
                }
                else {
                    res.json({
                        ok: true,
                        status: 200
                    });
                }
            });
        };
        this.createEntrega = function (req, res) {
            var query = "\n            CALL SP_EntregarActividad(?, ?, ?, ?);\n        ";
            var body = {
                texto: req.body.texto,
                idUsuario: req.body.idUsuario,
                idActividad: req.body.idActividad,
                archivo: req.body.archivo
            };
            mysql_1.default.sendQuery(query, [body.texto, body.idUsuario, body.idActividad, body.archivo], function (err, data) {
                if (err) {
                    res.status(400).json({
                        ok: false,
                        status: 400,
                        error: err
                    });
                }
                else {
                    res.json({
                        ok: true,
                        status: 200,
                        data: data[0]
                    });
                }
            });
        };
        this.update = function (req, res) {
            var query = "\n            UPDATE Actividad SET idDetalleCurso = ?, nombre = ?, fechaLimite = ?, ponderacion = ?, estado = ?\n            WHERE idActividad = ?;\n        ";
            var body = {
                idDetalleCurso: req.body.idDetalleCurso,
                nombre: req.body.nombre,
                fechaLimite: req.body.fechaLimite,
                ponderacion: req.body.ponderacion,
                estado: req.body.estado,
                idActividad: req.params.id
            };
            mysql_1.default.sendQuery(query, [body.idDetalleCurso, body.nombre, body.fechaLimite, body.ponderacion, body.estado, body.idActividad], function (err, data) {
                if (err) {
                    res.status(400).json({
                        ok: false,
                        status: 400,
                        error: err
                    });
                }
                else {
                    res.json({
                        ok: true,
                        status: 200
                    });
                }
            });
        };
        this.delete = function (req, res) {
            var id = req.params.id;
            var query = "\n            DELETE FROM Actividad WHERE idActividad = ?;\n        ";
            mysql_1.default.sendQuery(query, id, function (err, data) {
                if (err) {
                    res.status(400).json({
                        ok: false,
                        status: 400,
                        error: err
                    });
                }
                else {
                    res.json({
                        ok: true,
                        status: 200,
                    });
                }
            });
        };
    }
    ActividadController.getInstance = function () {
        return this._instance || (this._instance = new this());
    };
    return ActividadController;
}());
exports.default = ActividadController;
