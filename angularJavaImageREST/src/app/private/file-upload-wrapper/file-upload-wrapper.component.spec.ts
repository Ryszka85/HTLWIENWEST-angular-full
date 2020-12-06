import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadWrapperComponent } from './file-upload-wrapper.component';

describe('FileUploadWrapperComponent', () => {
  let component: FileUploadWrapperComponent;
  let fixture: ComponentFixture<FileUploadWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploadWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
