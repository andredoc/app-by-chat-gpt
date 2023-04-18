import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCountriesComponent } from './image-countries.component';

describe('ImageCountriesComponent', () => {
  let component: ImageCountriesComponent;
  let fixture: ComponentFixture<ImageCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageCountriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
