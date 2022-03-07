import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistermedicComponent } from './registermedic.component';

describe('RegistermedicComponent', () => {
  let component: RegistermedicComponent;
  let fixture: ComponentFixture<RegistermedicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistermedicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistermedicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
