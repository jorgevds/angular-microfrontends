import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { HIVE_FEATURE_KEY, hiveReducer } from "./hive/hive.reducer";

@NgModule({
    imports: [
        StoreModule.forRoot({ [HIVE_FEATURE_KEY]: hiveReducer }),
        StoreDevtoolsModule.instrument(),
    ],
})
export class HiveStoreModule {}

export { HiveFeatureModule } from "./hive/hive-feature.module";
export { HiveEntity } from "./hive/hive.models";
export * from "./hive/hive.selectors";
export * from "./hive/hive.reducer";
export * from "./hive/hive.actions";
