import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditReportComponent } from './admin-edit-report.component';

describe('AdminEditReportComponent', () => {
  let component: AdminEditReportComponent;
  let fixture: ComponentFixture<AdminEditReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEditReportComponent]
    });
    fixture = TestBed.createComponent(AdminEditReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
