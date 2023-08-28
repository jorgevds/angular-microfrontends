import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { NasaStoreModule } from "../../../../libs/store/src/lib/nasa/nasa-store.module";
import { BootstrapRoutingModule } from "./bootstrap-routing.module";
import { BootstrapComponent } from "./component/bootstrap.component";

@NgModule({
    declarations: [BootstrapComponent],
    imports: [
        BootstrapRoutingModule,
        HttpClientModule,
        BrowserModule,
        NasaStoreModule,
        StoreDevtoolsModule.instrument(),
    ],
    providers: [HttpClientModule],
    bootstrap: [BootstrapComponent],
})
export class BootstrapModule {}
