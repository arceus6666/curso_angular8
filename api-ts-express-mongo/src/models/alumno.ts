import { Schema, model } from 'mongoose';

const alumnoSchema = new Schema({
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

export default model('Alumno', alumnoSchema);
