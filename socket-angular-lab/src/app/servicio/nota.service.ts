import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Nota } from '../modelo/nota';
@Injectable({
  providedIn: 'root'
})
export class NotaService {
  notaActual = this.socket.fromEvent<Nota>('nota');
  notas = this.socket.fromEvent<string[]>('notas');
  constructor(private socket: Socket) { }
  obtenerNota(id: string) {
    this.socket.emit('getDoc', id);
  }
  nuevaNota() {
    this.socket.emit('addDoc', { id: this.docId(), doc: '' });
  }
  editarNota(nota: Nota) {
    this.socket.emit('editDoc', nota);
  }
  getMessage() {
    return this.socket.fromEvent('message');
  }
  sendMessage(msg: string) {
    this.socket.emit('message', msg);
  }
  private docId() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}