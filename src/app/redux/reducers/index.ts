import { ActionReducer, combineReducers } from '@ngrx/store'

import * as map from "./map.reducer";
import * as cities from "./cities.reducer";

export interface State {
    map: map.State,
    cities: cities.State
}

export const reducers = {
    map: map.reducer,
    cities: cities.reducer
};

const devReducer: ActionReducer<State> = combineReducers(reducers);

export const reducer = (state, action) => {
    return devReducer(state, action);
}
