import { Request, Response, NextFunction, Router } from 'express';
import Alumno from '../models/alumno';

class UserRouter {

  router: Router;

  constructor() {
    this.router = Router();
    this.rutas();
  }

  async obtenerAlumnos(req: Request, res: Response) {
    const alumnos = await Alumno.find();
    res.json(alumnos);
  }

  async obtenerAlumno(req: Request, res: Response) {
    const { id } = req.params;
    const alumno = await Alumno.findOne({ doc_identidad: id });
    res.json(alumno);
  }

  async crearAlumno(req: Request, res: Response) {
    const nuevoAlumno = new Alumno(req.body);
    await nuevoAlumno.save();
    res.json({ status: 200, nuevoAlumno });
  }

  async actualizarAlumno(req: Request, res: Response) {
    const { id } = req.params;
    const alumno = await Alumno.findOneAndUpdate({ doc_identidad: id }, req.body, { new: true });
    res.json(alumno);
  }

  async eliminarAlumno(req: Request, res: Response) {
    const { id } = req.params;
    const alumno = await Alumno.findOneAndDelete({ doc_identidad: id });
    res.json(alumno);
  }

  rutas() {
    this.router.get('/', this.obtenerAlumnos);
    this.router.get('/:id', this.obtenerAlumno);
    this.router.post('/', this.crearAlumno);
    this.router.put('/:id', this.actualizarAlumno);
    this.router.delete('/:id', this.eliminarAlumno);
  }
}

const userRouter = new UserRouter();

export default userRouter.router;
