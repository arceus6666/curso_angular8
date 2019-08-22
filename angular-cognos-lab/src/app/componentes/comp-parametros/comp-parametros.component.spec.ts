import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompParametrosComponent } from './comp-parametros.component';

describe('CompParametrosComponent', () => {
  let component: CompParametrosComponent;
  let fixture: ComponentFixture<CompParametrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompParametrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompParametrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
