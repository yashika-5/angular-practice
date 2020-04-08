import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmpDrivenFormComponent } from './tmp-driven-form.component';

describe('TmpDrivenFormComponent', () => {
  let component: TmpDrivenFormComponent;
  let fixture: ComponentFixture<TmpDrivenFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmpDrivenFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmpDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
