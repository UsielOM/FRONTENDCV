import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeprescriptionComponent } from './makeprescription.component';

describe('MakeprescriptionComponent', () => {
  let component: MakeprescriptionComponent;
  let fixture: ComponentFixture<MakeprescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeprescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeprescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
