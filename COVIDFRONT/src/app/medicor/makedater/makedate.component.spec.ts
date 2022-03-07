import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakedateComponent } from './makedate.component';

describe('MakedateComponent', () => {
  let component: MakedateComponent;
  let fixture: ComponentFixture<MakedateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakedateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakedateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
