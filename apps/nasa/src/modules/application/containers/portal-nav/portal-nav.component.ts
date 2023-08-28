import { Component, OnInit } from "@angular/core";
import { ApplicationSandbox } from "modules/application/sandbox/application-sandbox.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { ApplicationService } from "../../services/application.service";

@Component({
    selector: "nasa-portal-nav",
    templateUrl: "./portal-nav.component.html",
    styleUrls: ["./portal-nav.component.css"],
    providers: [ApplicationService],
})
export class PortalNavComponent implements OnInit {
    constructor(private sandbox: ApplicationSandbox) {}

    public APODImgSrc$?: Observable<string>;
    public NeoImgSrc: string = "assets/img/wendy-wei-space.jpeg";

    private today: string = new Date().toJSON().slice(0, 10);

    ngOnInit(): void {
        this.initializeImgUrl();
    }

    private initializeImgUrl(): void {
        this.APODImgSrc$ = this.sandbox
            .setupAPODForImgUrl(this.today)
            .pipe(
                map(({ url }) =>
                    url.includes("image")
                        ? url
                        : "assets/img/alex-andrews-space.jpeg"
                )
            );
    }
}
