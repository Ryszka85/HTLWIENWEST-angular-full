import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetResolutionDownloadDialogComponent } from './set-resolution-download-dialog.component';

describe('SetResolutionDownloadDialogComponent', () => {
  let component: SetResolutionDownloadDialogComponent;
  let fixture: ComponentFixture<SetResolutionDownloadDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetResolutionDownloadDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetResolutionDownloadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
