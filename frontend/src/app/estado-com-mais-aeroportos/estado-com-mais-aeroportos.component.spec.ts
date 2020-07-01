import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoComMaisAeroportosComponent } from './estado-com-mais-aeroportos.component';

describe('EstadoComMaisAeroportosComponent', () => {
  let component: EstadoComMaisAeroportosComponent;
  let fixture: ComponentFixture<EstadoComMaisAeroportosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoComMaisAeroportosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoComMaisAeroportosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
