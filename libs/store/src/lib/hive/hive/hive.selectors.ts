import { createFeatureSelector, createSelector } from "@ngrx/store";

import { HIVE_FEATURE_KEY, hiveAdapter, HiveState } from "./hive.reducer";

// Lookup the 'Hive' feature state managed by NgRx
export const getHiveState = createFeatureSelector<HiveState>(HIVE_FEATURE_KEY);

const { selectAll, selectEntities } = hiveAdapter.getSelectors();

export const getHiveLoaded = createSelector(
    getHiveState,
    (state: HiveState) => state.loaded
);

export const getHiveError = createSelector(
    getHiveState,
    (state: HiveState) => state.error
);

export const getAllHive = createSelector(getHiveState, (state: HiveState) =>
    selectAll(state)
);

export const getHiveEntities = createSelector(
    getHiveState,
    (state: HiveState) => selectEntities(state)
);

export const getSelectedHiveId = createSelector(
    getHiveState,
    (state: HiveState) => state.selectedId
);

export const getSelectedHive = createSelector(
    getHiveEntities,
    getSelectedHiveId,
    (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
