import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeletionPopupComponent } from './confirm-deletion-popup.component';

describe('ConfirmDeletionPopupComponent', () => {
  let component: ConfirmDeletionPopupComponent;
  let fixture: ComponentFixture<ConfirmDeletionPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmDeletionPopupComponent]
    });
    fixture = TestBed.createComponent(ConfirmDeletionPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
