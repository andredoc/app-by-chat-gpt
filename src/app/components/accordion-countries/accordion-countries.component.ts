import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-countries',
  templateUrl: './accordion-countries.component.html',
  styleUrls: ['./accordion-countries.component.scss']
})
export class AccordionCountriesComponent implements OnInit {

  @Input() countriesList:string[] = [];
  @Input() countryTitle:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
