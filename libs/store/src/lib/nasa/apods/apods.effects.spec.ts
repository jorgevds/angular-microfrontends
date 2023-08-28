import { TestBed } from "@angular/core/testing";
import { provideMockActions } from "@ngrx/effects/testing";
import { Action } from "@ngrx/store";
import { provideMockStore } from "@ngrx/store/testing";
import { NxModule } from "@nrwl/angular";
import { hot } from "jasmine-marbles";
import { Observable } from "rxjs";

import * as ApodsActions from "./apods.actions";
import { ApodsEffects } from "./apods.effects";

describe("ApodsEffects", () => {
    let actions: Observable<Action>;
    let effects: ApodsEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NxModule.forRoot()],
            providers: [
                ApodsEffects,
                provideMockActions(() => actions),
                provideMockStore(),
            ],
        });

        effects = TestBed.inject(ApodsEffects);
    });

    describe("init$", () => {
        it("should work", () => {
            actions = hot("-a-|", { a: ApodsActions.initApods() });

            const expected = hot("-a-|", {
                a: ApodsActions.loadApodsSuccess({ apods: [] }),
            });

            expect(effects.init$).toBeObservable(expected);
        });
    });
});
