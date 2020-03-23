import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { LOAD_CITIES, LoadCitiesSuccess } from '../actions/cities.actions';
import { ApiService } from 'src/app/services/api.service';

@Injectable()
export class CitiesEffects {
    constructor(
        private actions$: Actions,
        private api : ApiService
    ) {}

    @Effect() 
    loadCities$: Observable<Action> = this.actions$.pipe(
        ofType(LOAD_CITIES),
        switchMap(() => {
            return this.api.getCities()
                .pipe(
                    map(cities => new LoadCitiesSuccess(cities) )
                );
        })
    );

}