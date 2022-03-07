import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedichomepageComponent } from './medichomepage.component';

describe('MedichomepageComponent', () => {
  let component: MedichomepageComponent;
  let fixture: ComponentFixture<MedichomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedichomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedichomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
