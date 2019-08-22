import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompEventosComponent } from './comp-eventos.component';

describe('CompEventosComponent', () => {
  let component: CompEventosComponent;
  let fixture: ComponentFixture<CompEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
