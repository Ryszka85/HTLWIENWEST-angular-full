import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDialogWrapperComponent } from './login-dialog-wrapper.component';

describe('DialogWrapperComponent', () => {
  let component: LoginDialogWrapperComponent;
  let fixture: ComponentFixture<LoginDialogWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginDialogWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDialogWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
