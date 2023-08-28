import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";

import { FormModule } from "../../common/modules/form/form.module";
import { NeoDetailComponent } from "./containers/neo-detail/neo-detail.component";
import { NeowsComponent } from "./containers/neows/neows.component";
import { NeowsRoutingModule } from "./neows-routing.module";
import { NeowsSandbox } from "./sandbox/neows-sandbox.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NeowsRoutingModule,
        NgxSkeletonLoaderModule,
        FormModule,
    ],
    declarations: [NeowsComponent, NeoDetailComponent],
    providers: [NeowsSandbox],
    exports: [NeowsComponent, NeoDetailComponent],
})
export class NeowsModule {}
