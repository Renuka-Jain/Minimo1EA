import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportNewComponent } from './report-new.component';

describe('ReportNewComponent', () => {
  let component: ReportNewComponent;
  let fixture: ComponentFixture<ReportNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
