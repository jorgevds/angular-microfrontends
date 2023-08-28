import { createFeatureSelector, createSelector } from "@ngrx/store";

import { APODS_FEATURE_KEY, apodsAdapter, ApodsState } from "./apods.reducer";

// Lookup the 'Apods' feature state managed by NgRx
export const getApodsState =
    createFeatureSelector<ApodsState>(APODS_FEATURE_KEY);

const { selectAll, selectEntities } = apodsAdapter.getSelectors();

export const getApodsLoaded = createSelector(
    getApodsState,
    (state: ApodsState) => state.loaded
);

export const getApodsError = createSelector(
    getApodsState,
    (state: ApodsState) => state.error
);

export const getAllApods = createSelector(
    getApodsState,
    (state: ApodsState) => state.apods ?? []
);
