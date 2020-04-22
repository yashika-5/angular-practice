import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionCompComponent } from './condition-comp.component';

describe('ConditionCompComponent', () => {
  let component: ConditionCompComponent;
  let fixture: ComponentFixture<ConditionCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
