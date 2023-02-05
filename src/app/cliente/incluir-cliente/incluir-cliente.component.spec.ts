import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirClienteComponent } from './incluir-cliente.component';

describe('IncluirClienteComponent', () => {
  let component: IncluirClienteComponent;
  let fixture: ComponentFixture<IncluirClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluirClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncluirClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
