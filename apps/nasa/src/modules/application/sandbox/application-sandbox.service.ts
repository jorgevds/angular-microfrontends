import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { APOD } from "../../../common/types/interface";
import { ApplicationService } from "../services/application.service";

@Injectable()
export class ApplicationSandbox {
    constructor(private applicationService: ApplicationService) {}

    public setupAPODForImgUrl(date: string): Observable<APOD> {
        return this.applicationService.setupAPODForImgUrl(date);
    }
}
