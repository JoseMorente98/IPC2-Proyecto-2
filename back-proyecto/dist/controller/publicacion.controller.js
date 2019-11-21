"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("./../mysql/mysql"));
var PublicacionController = /** @class */ (function () {
    function PublicacionController() {
        this.getAll = function (req, res) {
            var query = "\n            SELECT * FROM Publicacion\n        ";
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
            var query = "\n            SELECT * FROM Publicacion WHERE idPublicacion = ?\n        ";
            var body = {
                idPublicacion: req.params.id
            };
            mysql_1.default.sendQuery(query, body.idPublicacion, function (err, data) {
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
        this.getComentarioByPublicacion = function (req, res) {
            var query = "\n            SELECT Usuario.nombre, Usuario.apellido, comentario, idPublicacion\n            FROM Comentario\n            INNER JOIN Usuario ON Comentario.idUsuario = Usuario.idUsuario\n            WHERE idPublicacion = ?\n        ";
            var body = {
                idPublicacion: req.params.id
            };
            mysql_1.default.sendQuery(query, body.idPublicacion, function (err, data) {
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
        this.getMeGusta = function (req, res) {
            var query = "\n            SELECT * FROM fase2.megusta\n            WHERE idUsuario = ? AND idPublicacion = ?;\n        ";
            var body = {
                idUsuario: req.params.id,
                idPublicacion: req.params.id2,
            };
            mysql_1.default.sendQuery(query, [body.idUsuario, body.idPublicacion], function (err, data) {
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
            var query = "\n            INSERT INTO Publicacion(titulo, descripcion, imagen, video, idUsuario) VALUES(?, ?, ?, ?, ?)\n        ";
            var body = {
                titulo: req.body.titulo,
                descripcion: req.body.descripcion,
                imagen: req.body.imagen,
                video: req.body.video,
                idUsuario: req.body.idUsuario,
            };
            mysql_1.default.sendQuery(query, [body.titulo, body.descripcion, body.imagen, body.video, body.idUsuario], function (err, data) {
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
        this.createComentario = function (req, res) {
            var query = "\n            INSERT INTO Comentario(comentario, idUsuario, idPublicacion) VALUES(?, ?, ?)\n        ";
            var body = {
                comentario: req.body.comentario,
                idUsuario: req.body.idUsuario,
                idPublicacion: req.body.idPublicacion,
            };
            mysql_1.default.sendQuery(query, [body.comentario, body.idUsuario, body.idPublicacion], function (err, data) {
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
        this.createMeGusta = function (req, res) {
            var query = "\n            CALL SP_CreateMeGusta(?, ?)\n        ";
            var body = {
                idUsuario: req.body.idUsuario,
                idPublicacion: req.body.idPublicacion
            };
            mysql_1.default.sendQuery(query, [body.idUsuario, body.idPublicacion], function (err, data) {
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
                titulo: req.body.titulo,
                descripcion: req.body.descripcion,
                imagen: req.body.imagen,
                video: req.body.video,
                idPublicacion: req.params.id,
            };
            var query = "\n            UPDATE Publicacion SET titulo = ?, descripcion = ?, imagen = ?, video = ?\n            WHERE idPublicacion = ?;\n        ";
            mysql_1.default.sendQuery(query, [body.titulo, body.descripcion, body.imagen, body.video, body.idPublicacion], function (err, data) {
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
            var query = "\n            DELETE FROM Publicacion WHERE idPublicacion = ?;\n        ";
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
        this.deleteMeGusta = function (req, res) {
            var id = req.params.id;
            var query = "\n            DELETE FROM MeGusta WHERE idMeGusta = ?;\n        ";
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
    PublicacionController.getInstance = function () {
        return this._instance || (this._instance = new this());
    };
    return PublicacionController;
}());
exports.default = PublicacionController;
