import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordboxComponent } from './passwordbox.component';

describe('PasswordboxComponent', () => {
  let component: PasswordboxComponent;
  let fixture: ComponentFixture<PasswordboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
