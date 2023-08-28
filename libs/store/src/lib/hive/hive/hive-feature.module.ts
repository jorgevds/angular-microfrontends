import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

import * as fromApods from "./hive.reducer";

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(
            fromApods.HIVE_FEATURE_KEY,
            fromApods.hiveReducer
        ),
    ],
})
export class HiveFeatureModule {}
