"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("./../mysql/mysql"));
var AsistenciaController = /** @class */ (function () {
    function AsistenciaController() {
        this.getAll = function (req, res) {
            var query = "\n            SELECT * FROM asistencia\n        ";
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
            var query = "\n            SELECT * FROM asistencia WHERE idDetalleCurso = ?\n        ";
            var body = {
                idAsistencia: req.params.id
            };
            mysql_1.default.sendQuery(query, body.idAsistencia, function (err, data) {
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
        this.getAsistencia = function (req, res) {
            var query = "\n            SELECT Usuario.nombre, Usuario.apellido, tipo, idAsistencia FROM fase2.detalleasistencia\n            INNER JOIN Usuario ON detalleasistencia.idUsuario = Usuario.idUsuario\n            WHERE idAsistencia = ?\n        ";
            var body = {
                idAsistencia: req.params.id
            };
            mysql_1.default.sendQuery(query, body.idAsistencia, function (err, data) {
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
            var query = "\n            INSERT INTO Asistencia(fecha, idDetalleCurso) VALUES(NOW(), ?)\n        ";
            var body = {
                idDetalleCurso: req.body.idDetalleCurso
            };
            mysql_1.default.sendQuery(query, [body.idDetalleCurso], function (err, data) {
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
        this.createAsistencia = function (req, res) {
            var query = "\n            INSERT INTO DetalleAsistencia(tipo, idUsuario, idAsistencia) VALUES(?, ?, ?)\n        ";
            var body = {
                idAsistencia: req.body.idAsistencia,
                idUsuario: req.body.idUsuario,
                tipo: req.body.tipo,
            };
            mysql_1.default.sendQuery(query, [body.tipo, body.idUsuario, body.idAsistencia], function (err, data) {
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
            var query = "\n            DELETE FROM Asistencia WHERE idAsistencia = ?;\n        ";
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
    AsistenciaController.getInstance = function () {
        return this._instance || (this._instance = new this());
    };
    return AsistenciaController;
}());
exports.default = AsistenciaController;
