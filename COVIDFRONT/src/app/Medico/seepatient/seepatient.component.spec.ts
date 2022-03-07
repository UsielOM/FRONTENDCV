import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeepatientComponent } from './seepatient.component';

describe('SeepatientComponent', () => {
  let component: SeepatientComponent;
  let fixture: ComponentFixture<SeepatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeepatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeepatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
