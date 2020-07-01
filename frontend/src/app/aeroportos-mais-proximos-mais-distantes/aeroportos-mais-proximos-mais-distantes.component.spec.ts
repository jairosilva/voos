import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeroportosMaisProximosMaisDistantesComponent } from './aeroportos-mais-proximos-mais-distantes.component';

describe('AeroportosMaisProximosMaisDistantesComponent', () => {
  let component: AeroportosMaisProximosMaisDistantesComponent;
  let fixture: ComponentFixture<AeroportosMaisProximosMaisDistantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeroportosMaisProximosMaisDistantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeroportosMaisProximosMaisDistantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
