import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlynumberboxComponent } from './onlynumberbox.component';

describe('OnlynumberboxComponent', () => {
  let component: OnlynumberboxComponent;
  let fixture: ComponentFixture<OnlynumberboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlynumberboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlynumberboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
