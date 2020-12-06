import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapPlaygroundComponent } from './bootstrap-playground.component';

describe('BootstrapPlaygroundComponent', () => {
  let component: BootstrapPlaygroundComponent;
  let fixture: ComponentFixture<BootstrapPlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapPlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
