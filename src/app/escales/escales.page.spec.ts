import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscalesPage } from './escales.page';

describe('EscalesPage', () => {
  let component: EscalesPage;
  let fixture: ComponentFixture<EscalesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EscalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
