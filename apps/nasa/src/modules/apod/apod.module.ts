import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ApodsFeatureModule } from "@store";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";

import { CommonComponentsModule } from "../../common/modules/common/common.module";
import { FormModule } from "../../common/modules/form/form.module";
import { ApodRoutingModule } from "./apod-routing.module";
import { ApodDetailComponent } from "./containers/apod-detail/apod-detail.component";
import { APODComponent } from "./containers/apod/apod.component";
import { ApodSandbox } from "./sandbox/apod-sandbox.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxSkeletonLoaderModule,
        ApodRoutingModule,
        FormModule,
        CommonComponentsModule,
        ApodsFeatureModule,
    ],
    declarations: [APODComponent, ApodDetailComponent],
    providers: [ApodSandbox, ReactiveFormsModule, FormsModule],
    exports: [APODComponent, ApodDetailComponent],
})
export class ApodModule {}
