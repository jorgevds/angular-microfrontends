import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import { APOD } from "../../../../../shared/shared/src";

import * as ApodsActions from "./apods.actions";

export const APODS_FEATURE_KEY = "apods";

export interface ApodsState {
    apods: APOD[];
    loaded: boolean; // has the Apods list been loaded
    error?: string | null; // last known error (if any)
}

export interface ApodsPartialState {
    readonly [APODS_FEATURE_KEY]: ApodsState;
}

export const apodsAdapter: EntityAdapter<APOD> = createEntityAdapter<APOD>();

export const initialApodsState: ApodsState = {
    apods: [],
    loaded: false,
};

const reducer = createReducer(
    initialApodsState,
    on(ApodsActions.initApods, (state) => ({
        ...state,
        loaded: false,
        error: null,
    })),
    on(ApodsActions.updateApods, (state, { start_date, end_date }) => ({
        ...state,
        loaded: false,
    })),
    on(ApodsActions.loadApodsSuccess, (state, { apods }) => ({
        ...state,
        apods,
        loaded: true,
    })),
    on(ApodsActions.loadApodsFailure, (state, { error }) => ({
        ...state,
        error,
    }))
);

export function apodsReducer(state: ApodsState | undefined, action: Action) {
    return reducer(state, action);
}
