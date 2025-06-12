import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Borders } from './borders';

describe('Borders', () => {
  let component: Borders;
  let fixture: ComponentFixture<Borders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Borders]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Borders);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
