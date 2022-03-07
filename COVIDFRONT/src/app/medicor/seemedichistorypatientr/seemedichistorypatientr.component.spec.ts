import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeemedichistorypatientrComponent } from './seemedichistorypatientr.component';

describe('SeemedichistorypatientrComponent', () => {
  let component: SeemedichistorypatientrComponent;
  let fixture: ComponentFixture<SeemedichistorypatientrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeemedichistorypatientrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeemedichistorypatientrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
