import { Action } from "@ngrx/store";

import * as ApodsActions from "./apods.actions";
import { ApodsEntity } from "./apods.models";
import { ApodsState, initialApodsState, apodsReducer } from "./apods.reducer";

describe("Apods Reducer", () => {
    const createApodsEntity = (id: string, name = ""): ApodsEntity => ({
        id,
        name: name || `name-${id}`,
    });

    describe("valid Apods actions", () => {
        it("loadApodsSuccess should return the list of known Apods", () => {
            const apods = [
                createApodsEntity("PRODUCT-AAA"),
                createApodsEntity("PRODUCT-zzz"),
            ];
            const action = ApodsActions.loadApodsSuccess({ apods });

            const result: ApodsState = apodsReducer(initialApodsState, action);

            expect(result.loaded).toBe(true);
            expect(result.ids.length).toBe(2);
        });
    });

    describe("unknown action", () => {
        it("should return the previous state", () => {
            const action = {} as Action;

            const result = apodsReducer(initialApodsState, action);

            expect(result).toBe(initialApodsState);
        });
    });
});
