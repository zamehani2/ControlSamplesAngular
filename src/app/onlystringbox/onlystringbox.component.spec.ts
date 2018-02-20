import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlystringboxComponent } from './onlystringbox.component';

describe('OnlystringboxComponent', () => {
  let component: OnlystringboxComponent;
  let fixture: ComponentFixture<OnlystringboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlystringboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlystringboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
