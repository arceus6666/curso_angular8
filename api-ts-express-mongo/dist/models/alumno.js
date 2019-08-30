"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var alumnoSchema = new mongoose_1.Schema({
    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true,
        unique: true
    },
    doc_identidad: {
        type: Number,
        required: true
    }
});
exports.default = mongoose_1.model('Alumno', alumnoSchema);
