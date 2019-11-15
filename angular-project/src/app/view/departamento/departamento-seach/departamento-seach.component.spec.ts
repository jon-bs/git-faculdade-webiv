import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoSeachComponent } from './departamento-seach.component';

describe('DepartamentoSeachComponent', () => {
  let component: DepartamentoSeachComponent;
  let fixture: ComponentFixture<DepartamentoSeachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartamentoSeachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentoSeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
