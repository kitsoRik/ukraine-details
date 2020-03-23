import { Injectable } from '@angular/core';
import { City } from '../models/city.model';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Store } from '@ngrx/store';
import { State } from '../redux/reducers';

@Injectable({
	providedIn: 'root'
})
export class CitiesService {

	cities: City[] = [];

	constructor(private store : Store<State>, private api: ApiService) { }

	getCityById(id: number): Observable<City> {
		return new Observable(observer => {
			let city : City = this.cities.find(c => c.id === id);

			if (city === undefined) {
				
				this.api.getCityById(id)
					.subscribe(result => {
						city = result;
						this.cities.push(city);
						observer.next(city);
					});
			}
		});
	}
}
