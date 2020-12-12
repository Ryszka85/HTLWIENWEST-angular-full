import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropperDetailsBarComponent } from './cropper-details-bar.component';

describe('CropperDetailsBarComponent', () => {
  let component: CropperDetailsBarComponent;
  let fixture: ComponentFixture<CropperDetailsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropperDetailsBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropperDetailsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
