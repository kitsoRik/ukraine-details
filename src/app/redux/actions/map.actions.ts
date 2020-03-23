import { Action } from '@ngrx/store';

export const CHOOSE_CITY = '[Map] CHOOSE_CITY';
export const CHANGE_IMAGE_QUALITY = '[Map] CHANGE_IMAGE_QUALITY';
export const HIGHLIGHT_CITY = '[Map] HIGHLIGHT_CITY';

export class HighlightCity implements Action {
    readonly type = HIGHLIGHT_CITY;

    constructor(public payload: number) { }
}

export class ChooseCity implements Action {
    readonly type = CHOOSE_CITY;

    constructor(public payload: number) { }
}

export class ChangeImageQuality implements Action {
    readonly type = CHANGE_IMAGE_QUALITY;

    constructor(public payload: string) { }
}


export type Actions = ChooseCity | HighlightCity | ChangeImageQuality;