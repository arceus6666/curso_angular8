import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoFrmComponent } from './alumno-frm.component';

describe('AlumnoFrmComponent', () => {
  let component: AlumnoFrmComponent;
  let fixture: ComponentFixture<AlumnoFrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoFrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
