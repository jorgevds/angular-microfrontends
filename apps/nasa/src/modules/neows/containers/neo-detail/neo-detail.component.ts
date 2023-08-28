import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DetailCometoid } from "@common/types/interface";
import { Observable } from "rxjs";

import { NeowsSandbox } from "../../sandbox/neows-sandbox.service";

@Component({
    selector: "nasa-neo-detail",
    templateUrl: "./neo-detail.component.html",
    styleUrls: ["./neo-detail.component.css"],
})
export class NeoDetailComponent implements OnInit {
    public comet$?: Observable<DetailCometoid>;

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private NeowsSandbox: NeowsSandbox
    ) {}

    ngOnInit(): void {
        this.setupCometoid();
    }

    private setupCometoid(): void {
        const urlId: string = String(this.route.snapshot.paramMap.get("id"));
        this.comet$ = this.NeowsSandbox.setupCometoid(urlId);
    }

    public goBack(): void {
        this.location.back();
    }
}
