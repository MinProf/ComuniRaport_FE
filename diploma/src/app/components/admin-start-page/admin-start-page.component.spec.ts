import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStartPageComponent } from './admin-start-page.component';

describe('AdminStartPageComponent', () => {
  let component: AdminStartPageComponent;
  let fixture: ComponentFixture<AdminStartPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminStartPageComponent]
    });
    fixture = TestBed.createComponent(AdminStartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
