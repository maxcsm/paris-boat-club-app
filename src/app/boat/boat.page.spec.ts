import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoatPage } from './boat.page';

describe('BoatPage', () => {
  let component: BoatPage;
  let fixture: ComponentFixture<BoatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BoatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
