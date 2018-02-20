import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpletextboxComponent } from './simpletextbox.component';

describe('SimpletextboxComponent', () => {
  let component: SimpletextboxComponent;
  let fixture: ComponentFixture<SimpletextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpletextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpletextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
