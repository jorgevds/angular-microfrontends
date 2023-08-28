import { ApodsEntity } from "./apods.models";
import {
    apodsAdapter,
    ApodsPartialState,
    initialApodsState,
} from "./apods.reducer";
import * as ApodsSelectors from "./apods.selectors";

describe("Apods Selectors", () => {
    const ERROR_MSG = "No Error Available";
    const getApodsId = (it: ApodsEntity) => it.id;
    const createApodsEntity = (id: string, name = "") =>
        ({
            id,
            name: name || `name-${id}`,
        } as ApodsEntity);

    let state: ApodsPartialState;

    beforeEach(() => {
        state = {
            apods: apodsAdapter.setAll(
                [
                    createApodsEntity("PRODUCT-AAA"),
                    createApodsEntity("PRODUCT-BBB"),
                    createApodsEntity("PRODUCT-CCC"),
                ],
                {
                    ...initialApodsState,
                    selectedId: "PRODUCT-BBB",
                    error: ERROR_MSG,
                    loaded: true,
                }
            ),
        };
    });

    describe("Apods Selectors", () => {
        it("getAllApods() should return the list of Apods", () => {
            const results = ApodsSelectors.getAllApods(state);
            const selId = getApodsId(results[1]);

            expect(results.length).toBe(3);
            expect(selId).toBe("PRODUCT-BBB");
        });

        it("getSelected() should return the selected Entity", () => {
            const result = ApodsSelectors.getSelected(state) as ApodsEntity;
            const selId = getApodsId(result);

            expect(selId).toBe("PRODUCT-BBB");
        });

        it('getApodsLoaded() should return the current "loaded" status', () => {
            const result = ApodsSelectors.getApodsLoaded(state);

            expect(result).toBe(true);
        });

        it('getApodsError() should return the current "error" state', () => {
            const result = ApodsSelectors.getApodsError(state);

            expect(result).toBe(ERROR_MSG);
        });
    });
});
