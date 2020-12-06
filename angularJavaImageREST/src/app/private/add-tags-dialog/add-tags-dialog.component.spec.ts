import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTagsDialogComponent } from './add-tags-dialog.component';

describe('AddTagsDialogComponent', () => {
  let component: AddTagsDialogComponent;
  let fixture: ComponentFixture<AddTagsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTagsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTagsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
