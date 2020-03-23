import * as map from '../actions/map.actions';
import { MIN_QUALITY } from 'src/app/contants/qualities.constants';

export interface State {
    selectedCity: number,
    imageQuality: string
};

const initialState: State = {
    selectedCity: -1,
    imageQuality: MIN_QUALITY
};

export function reducer(state: State = initialState, action: map.Actions ): State {
    switch (action.type) {
        case map.CHOOSE_CITY: {
            return {
               ...state,
            };
        }

        case map.HIGHLIGHT_CITY: {
            return {
                ...state,
                selectedCity: action.payload
            }
        }

        case map.CHANGE_IMAGE_QUALITY: {
            return {
                ...state,
                imageQuality: action.payload
            }
        }

        default: {
            return state;
        }
    }
}