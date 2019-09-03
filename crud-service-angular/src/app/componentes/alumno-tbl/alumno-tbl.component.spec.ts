import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoTblComponent } from './alumno-tbl.component';

describe('AlumnoTblComponent', () => {
  let component: AlumnoTblComponent;
  let fixture: ComponentFixture<AlumnoTblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoTblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
