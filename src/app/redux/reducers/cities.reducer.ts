import * as cities from '../actions/cities.actions';
import { NOT_LOADED, LOADING, LOADED } from 'src/app/contants/loading.contants';
import { City } from 'src/app/models/city.model';

export interface State {
    loadingState,
    cities: City[],
    highlightedCity: City | null
};

const initialState: State = {
    loadingState: NOT_LOADED,
    cities: [],
    highlightedCity: null
};

export function reducer(state = initialState, action: cities.Actions ): State {
    switch (action.type) {
        case cities.LOAD_CITIES: {
            return {
                ...state,
                loadingState: LOADING
            };
        }

        case cities.LOAD_CITIES_SUCCESS: {
            const cities : City[] = action.payload;

            return {
                ...state,
                loadingState: LOADED,
                cities
            }
        }

        case cities.HIGHLIGHT_CITY: {
            const id = action.payload;
            return {
                ...state,
                highlightedCity: state.cities.find(c => c.id === id)
            }
        }

        default: {
            return state;
        }
    }
}