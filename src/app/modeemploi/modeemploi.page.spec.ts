import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModeemploiPage } from './modeemploi.page';

describe('ModeemploiPage', () => {
  let component: ModeemploiPage;
  let fixture: ComponentFixture<ModeemploiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModeemploiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
