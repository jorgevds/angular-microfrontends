import { createAction, props } from "@ngrx/store";

import { HiveEntity } from "./hive.models";

export const initHive = createAction("[Hive Page] Init");

export const loadHiveSuccess = createAction(
    "[Hive/API] Load Hive Success",
    props<{ hive: HiveEntity[] }>()
);

export const loadHiveFailure = createAction(
    "[Hive/API] Load Hive Failure",
    props<{ error: any }>()
);
