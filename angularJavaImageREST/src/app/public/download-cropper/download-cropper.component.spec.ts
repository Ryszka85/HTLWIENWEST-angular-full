import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadCropperComponent } from './download-cropper.component';

describe('DownloadCropperComponent', () => {
  let component: DownloadCropperComponent;
  let fixture: ComponentFixture<DownloadCropperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadCropperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadCropperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
