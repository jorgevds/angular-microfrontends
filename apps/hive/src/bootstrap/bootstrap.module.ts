import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { BootstrapRoutingModule } from "./bootstrap-routing.module";
import { BootstrapComponent } from "./component/bootstrap.component";

@NgModule({
    declarations: [BootstrapComponent],
    imports: [
        BootstrapRoutingModule,
        HttpClientModule,
        BrowserModule,

        StoreModule.forRoot({}),
        StoreDevtoolsModule.instrument(),
    ],
    providers: [HttpClientModule],
    bootstrap: [BootstrapComponent],
})
export class BootstrapModule {}
