import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscalesmapPage } from './escalesmap.page';

describe('EscalesmapPage', () => {
  let component: EscalesmapPage;
  let fixture: ComponentFixture<EscalesmapPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EscalesmapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
