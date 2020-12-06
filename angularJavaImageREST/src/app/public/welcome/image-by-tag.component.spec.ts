import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageByTagComponent } from './image-by-tag.component';

describe('WelcomeComponent', () => {
  let component: ImageByTagComponent;
  let fixture: ComponentFixture<ImageByTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageByTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageByTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
