import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { ApodsEffects } from "./apods.effects";
import * as fromApods from "./apods.reducer";

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(
            fromApods.APODS_FEATURE_KEY,
            fromApods.apodsReducer
        ),
        EffectsModule.forFeature([ApodsEffects]),
    ],
})
export class ApodsFeatureModule {}
