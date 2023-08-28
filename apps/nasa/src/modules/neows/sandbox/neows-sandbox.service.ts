import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { NeoService } from "../../../common/services/neows/neo.service";
import { DetailCometoid, Neo } from "../../../common/types/interface";

@Injectable()
export class NeowsSandbox {
    constructor(private NeoService: NeoService) {}

    public getRangeOfNeows(start: string, end: string): Observable<Neo> {
        return this.NeoService.getRangeOfNeows(start, end);
    }

    public setupCometoid(routeId: string): Observable<DetailCometoid> {
        return this.NeoService.getCometoidDetail(routeId);
    }
}
