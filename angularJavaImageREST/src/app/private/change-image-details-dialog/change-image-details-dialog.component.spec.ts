import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeImageDetailsDialogComponent } from './change-image-details-dialog.component';

describe('ChangeImageDetailsDialogComponent', () => {
  let component: ChangeImageDetailsDialogComponent;
  let fixture: ComponentFixture<ChangeImageDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeImageDetailsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeImageDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
