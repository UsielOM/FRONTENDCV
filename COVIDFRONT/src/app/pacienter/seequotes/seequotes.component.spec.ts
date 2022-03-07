import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeequotesComponent } from './seequotes.component';

describe('SeequotesComponent', () => {
  let component: SeequotesComponent;
  let fixture: ComponentFixture<SeequotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeequotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeequotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
