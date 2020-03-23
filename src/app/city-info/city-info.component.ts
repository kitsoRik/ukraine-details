import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../redux/reducers';

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.scss']
})
export class CityInfoComponent {
  title : string;
  population: number;

  constructor(private store : Store<State>) {
    store.subscribe(({ cities: { highlightedCity }}) => {
      if(!highlightedCity) return;

      this.title = highlightedCity.name;
      this.population = highlightedCity.population;
    });
  }

}
