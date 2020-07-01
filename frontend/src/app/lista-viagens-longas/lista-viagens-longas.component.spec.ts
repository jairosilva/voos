import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaViagensLongasComponent } from './lista-viagens-longas.component';

describe('ListaViagensLongasComponent', () => {
  let component: ListaViagensLongasComponent;
  let fixture: ComponentFixture<ListaViagensLongasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaViagensLongasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaViagensLongasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
