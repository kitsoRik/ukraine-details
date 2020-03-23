import { Action } from '@ngrx/store';
import { City } from 'src/app/models/city.model';

export const LOAD_CITIES = '[Cities] LOAD_CITIES';
export const LOAD_CITIES_SUCCESS = '[Cities] LOAD_CITIES_SUCCESS';
export const HIGHLIGHT_CITY = '[Cities] HIGHLIGHT_CITY';

export class LoadCities implements Action {
    readonly type = LOAD_CITIES;

    constructor() { }
}

export class LoadCitiesSuccess implements Action {
    readonly type = LOAD_CITIES_SUCCESS;

    constructor(public payload : City[]) { }
}

export class HighlightCity implements Action {
    readonly type = HIGHLIGHT_CITY;

    constructor(public payload: number) { }
}


export type Actions = LoadCities | LoadCitiesSuccess | HighlightCity;