import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeEmailThirdPartyComponent } from './change-email-third-party.component';

describe('ChangeEmailThirdPartyComponent', () => {
  let component: ChangeEmailThirdPartyComponent;
  let fixture: ComponentFixture<ChangeEmailThirdPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeEmailThirdPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeEmailThirdPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
