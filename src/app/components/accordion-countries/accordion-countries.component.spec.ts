import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionCountriesComponent } from './accordion-countries.component';

describe('AccordionCountriesComponent', () => {
  let component: AccordionCountriesComponent;
  let fixture: ComponentFixture<AccordionCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionCountriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
