"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("./../mysql/mysql"));
var RespuestaController = /** @class */ (function () {
    function RespuestaController() {
        this.getAll = function (req, res) {
            var query = "\n            SELECT * FROM Respuesta\n        ";
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
            var query = "\n            SELECT Evaluacion.nombre, SUM(Respuesta.punteo) AS punteo FROM fase2.respuesta\n            INNER JOIN evaluacion ON respuesta.idEvaluacion = evaluacion.idEvaluacion\n            WHERE respuesta.idUsuario = ?\n            group by respuesta.idEvaluacion;\n        ";
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
            var query = "\n            INSERT INTO Respuesta(respuesta, punteo, idPregunta, idEvaluacion, idUsuario)\n            VALUES(?, ?, ?, ?, ?)\n        ";
            var body = {
                respuesta: req.body.respuesta,
                punteo: req.body.punteo,
                idPregunta: req.body.idPregunta,
                idEvaluacion: req.body.idEvaluacion,
                idUsuario: req.body.idUsuario,
            };
            mysql_1.default.sendQuery(query, [body.respuesta, body.punteo, body.idPregunta, body.idEvaluacion, body.idUsuario], function (err, data) {
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
    }
    RespuestaController.getInstance = function () {
        return this._instance || (this._instance = new this());
    };
    return RespuestaController;
}());
exports.default = RespuestaController;
