import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageCountriesComponent } from './components/image-countries/image-countries.component';
import { AccordionCountriesComponent } from './components/accordion-countries/accordion-countries.component';
import { CommonModule } from '@angular/common';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    ImageCountriesComponent,
    AccordionCountriesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDividerModule,
    CommonModule,
    CdkAccordionModule,
    MatExpansionModule,
    MatListModule,
    MatGridListModule
  ],
  exports: [
    AccordionCountriesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
