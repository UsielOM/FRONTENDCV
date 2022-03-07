import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeemedichistorypatientComponent } from './seemedichistorypatient.component';

describe('SeemedichistorypatientComponent', () => {
  let component: SeemedichistorypatientComponent;
  let fixture: ComponentFixture<SeemedichistorypatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeemedichistorypatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeemedichistorypatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
