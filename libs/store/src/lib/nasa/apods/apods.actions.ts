import { createAction, props } from "@ngrx/store";
import { APOD } from "../../../../../shared/shared/src";

export const initApods = createAction(
    "[Apods Page] Init",
    props<{ start_date: string; end_date: string }>()
);

export const updateApods = createAction(
    "[Apods] Request new range",
    props<{ start_date: string; end_date: string }>()
);

export const loadApodsSuccess = createAction(
    "[Apods/API] Load Apods Success",
    props<{ apods: APOD[] }>()
);

export const loadApodsFailure = createAction(
    "[Apods/API] Load Apods Failure",
    props<{ error: any }>()
);
