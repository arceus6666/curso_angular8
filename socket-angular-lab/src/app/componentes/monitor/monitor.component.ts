import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { NotaService } from 'src/app/servicio/nota.service';
@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit, OnDestroy {
  private _docSub: Subscription;
  message: string[];
  constructor(private notaServicio: NotaService) { }
  ngOnInit() {
    this.notaServicio.getMessage().subscribe(resp => {
      this.message = resp as string[];
    });
  }
  ngOnDestroy() {
    this._docSub.unsubscribe();
  }
}