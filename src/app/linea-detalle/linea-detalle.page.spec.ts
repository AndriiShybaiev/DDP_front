import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LineaDetallePage } from './linea-detalle.page';

describe('LineaDetallePage', () => {
  let component: LineaDetallePage;
  let fixture: ComponentFixture<LineaDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LineaDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
