import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormhistorypComponent } from './formhistoryp.component';

describe('FormhistorypComponent', () => {
  let component: FormhistorypComponent;
  let fixture: ComponentFixture<FormhistorypComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormhistorypComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormhistorypComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
