import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterVitalsingsComponent } from './register-vitalsings.component';

describe('RegisterVitalsingsComponent', () => {
  let component: RegisterVitalsingsComponent;
  let fixture: ComponentFixture<RegisterVitalsingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterVitalsingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterVitalsingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
