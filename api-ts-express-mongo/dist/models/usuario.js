"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var UsuarioSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true,
        lowercase: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});
exports.default = mongoose_1.model('Usuario', UsuarioSchema);
