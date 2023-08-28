import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";

import * as HiveActions from "./hive.actions";
import { HiveEntity } from "./hive.models";

export const HIVE_FEATURE_KEY = "hive";

export interface HiveState extends EntityState<HiveEntity> {
    selectedId?: string | number; // which Hive record has been selected
    loaded: boolean; // has the Hive list been loaded
    error?: string | null; // last known error (if any)
}

export interface HivePartialState {
    readonly [HIVE_FEATURE_KEY]: HiveState;
}

export const hiveAdapter: EntityAdapter<HiveEntity> =
    createEntityAdapter<HiveEntity>();

export const initialHiveState: HiveState = hiveAdapter.getInitialState({
    // set initial required properties
    loaded: false,
});

const reducer = createReducer(
    initialHiveState,
    on(HiveActions.initHive, (state) => ({
        ...state,
        loaded: false,
        error: null,
    })),
    on(HiveActions.loadHiveSuccess, (state, { hive }) =>
        hiveAdapter.setAll(hive, { ...state, loaded: true })
    ),
    on(HiveActions.loadHiveFailure, (state, { error }) => ({
        ...state,
        error,
    }))
);

export function hiveReducer(state: HiveState | undefined, action: Action) {
    return reducer(state, action);
}
