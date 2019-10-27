"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("./../mysql/mysql"));
var PreguntaController = /** @class */ (function () {
    function PreguntaController() {
        this.getAll = function (req, res) {
            var query = "\n            SELECT * FROM Pregunta\n        ";
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
            var query = "\n            SELECT * FROM Pregunta WHERE idPregunta = ?\n        ";
            var body = {
                idPregunta: req.params.id
            };
            mysql_1.default.sendQuery(query, body.idPregunta, function (err, data) {
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
        this.getByEvaluacion = function (req, res) {
            var query = "\n            SELECT * FROM Pregunta WHERE idEvaluacion = ?\n        ";
            var body = {
                idEvaluacion: req.params.id
            };
            mysql_1.default.sendQuery(query, body.idEvaluacion, function (err, data) {
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
        this.getByEvaluacionAleatorio = function (req, res) {
            var query = "\n            CALL SP_MostarPreguntasAleatorio(?);\n        ";
            var body = {
                idEvaluacion: req.params.id
            };
            mysql_1.default.sendQuery(query, body.idEvaluacion, function (err, data) {
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
        this.create = function (req, res) {
            var query = "\n            INSERT INTO Pregunta(tipoPregunta, pregunta, respuesta1, respuesta2, respuesta3, correcta, punteo, idEvaluacion)\n            VALUES(?, ?, ?, ?, ?, ?, ?, ?)\n        ";
            var body = {
                tipoPregunta: req.body.tipoPregunta,
                pregunta: req.body.pregunta,
                respuesta1: req.body.respuesta1,
                respuesta2: req.body.respuesta2,
                respuesta3: req.body.respuesta3,
                correcta: req.body.correcta,
                punteo: req.body.punteo,
                idEvaluacion: req.body.idEvaluacion,
            };
            mysql_1.default.sendQuery(query, [body.tipoPregunta, body.pregunta, body.respuesta1, body.respuesta2, body.respuesta3,
                body.correcta, body.punteo, body.idEvaluacion], function (err, data) {
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
        this.update = function (req, res) {
            var body = {
                tipoPregunta: req.body.tipoPregunta,
                pregunta: req.body.pregunta,
                respuesta1: req.body.respuesta1,
                respuesta2: req.body.respuesta2,
                respuesta3: req.body.respuesta3,
                correcta: req.body.correcta,
                punteo: req.body.punteo,
                idPregunta: req.params.id,
            };
            var query = "\n            UPDATE Pregunta SET tipoPregunta = ?, pregunta = ?, respuesta1 = ?, respuesta2 = ?, respuesta3 = ?, correcta = ?, punteo = ?\n            WHERE idPregunta = ?;\n        ";
            mysql_1.default.sendQuery(query, [body.tipoPregunta, body.pregunta, body.respuesta1, body.respuesta2, body.respuesta3,
                body.correcta, body.punteo, body.idPregunta], function (err, data) {
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
            var query = "\n            DELETE FROM Pregunta WHERE idPregunta = ?;\n        ";
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
    PreguntaController.getInstance = function () {
        return this._instance || (this._instance = new this());
    };
    return PreguntaController;
}());
exports.default = PreguntaController;
