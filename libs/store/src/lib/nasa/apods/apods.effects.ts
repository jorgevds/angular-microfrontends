import { Injectable } from "@angular/core";
import {
    Actions,
    concatLatestFrom,
    createEffect,
    CreateEffectMetadata,
    ofType,
} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { TypedAction } from "@ngrx/store/src/models";
import { APOD, APODService } from "../../../../../shared/shared/src";
import { EMPTY, Observable, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";

import * as ApodsActions from "./apods.actions";
import { getAllApods } from "./apods.selectors";

@Injectable()
export class ApodsEffects {
    constructor(
        private readonly actions$: Actions,
        private apodService: APODService,
        private store: Store
    ) {}

    init$: Observable<
        { apods: APOD[] } & TypedAction<"[Apods/API] Load Apods Success">
    > &
        CreateEffectMetadata = createEffect(() =>
        this.actions$.pipe(
            ofType(ApodsActions.initApods),
            concatLatestFrom(() => this.store.select(getAllApods)),
            mergeMap(([{ start_date, end_date }, apods]) =>
                apods.length > 0
                    ? of(ApodsActions.loadApodsSuccess({ apods }))
                    : this.apodService
                          .getRangeOfAPOD(start_date, end_date)
                          .pipe(
                              map((apods) =>
                                  ApodsActions.loadApodsSuccess({ apods })
                              ),
                              catchError(() => EMPTY)
                          )
            )
        )
    );

    update$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ApodsActions.updateApods),
            mergeMap(({ start_date, end_date }) =>
                this.apodService.getRangeOfAPOD(start_date, end_date).pipe(
                    map((apods) => ApodsActions.loadApodsSuccess({ apods })),
                    catchError(() => EMPTY)
                )
            )
        )
    );
}
