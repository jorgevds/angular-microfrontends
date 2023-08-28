import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { ApodsEffects } from "./apods/apods.effects";
import { APODS_FEATURE_KEY, apodsReducer } from "./apods/apods.reducer";

@NgModule({
    imports: [
        StoreModule.forRoot({ [APODS_FEATURE_KEY]: apodsReducer }),
        EffectsModule.forRoot([ApodsEffects]),
        StoreDevtoolsModule.instrument(),
    ],
})
export class NasaStoreModule {}

export { ApodsFeatureModule } from "./apods/apods-feature.module";
export { ApodsEntity } from "./apods/apods.models";
export { ApodsEffects } from "./apods/apods.effects";
export * from "./apods/apods.selectors";
export * from "./apods/apods.reducer";
export * from "./apods/apods.actions";
