import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryList } from './country-list';

describe('CountryList', () => {
  let component: CountryList;
  let fixture: ComponentFixture<CountryList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
