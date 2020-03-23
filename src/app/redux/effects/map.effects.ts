import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HIGHLIGHT_CITY } from '../actions/map.actions';
import { map } from 'rxjs/operators';
import { HighlightCity } from '../actions/cities.actions';

@Injectable()
export class MapEffects {
    @Effect() 
    highlightCity$: Observable<Action> = this.actions$.pipe(
        ofType(HIGHLIGHT_CITY),
        map(({payload}) => new HighlightCity(payload))
    );

    constructor(
        private actions$: Actions
    ) {}
}