import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioFrmComponent } from './usuario-frm.component';

describe('UsuarioFrmComponent', () => {
  let component: UsuarioFrmComponent;
  let fixture: ComponentFixture<UsuarioFrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioFrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
