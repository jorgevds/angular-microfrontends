import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { APODService } from "../../../common/services/apod/apod.service";
import { APOD } from "../../../common/types/interface";

@Injectable()
export class ApodSandbox {
    constructor(private APODService: APODService) {}

    getRangeOfAPOD(start: string, end: string): Observable<APOD[]> {
        // return of([
        //     {
        //         date: "2022-08-30",
        //         explanation: "string",
        //         hdurl: "string",
        //         media_type: "string",
        //         service_version: "string",
        //         title: "string",
        //         url: "string",
        //     },
        //     {
        //         date: "2022-08-30",
        //         explanation: "string",
        //         hdurl: "string",
        //         media_type: "string",
        //         service_version: "string",
        //         title: "string",
        //         url: "string",
        //     },
        //     {
        //         date: "2022-08-30",
        //         explanation: "string",
        //         hdurl: "string",
        //         media_type: "string",
        //         service_version: "string",
        //         title: "string",
        //         url: "string",
        //     },
        // ]);
        return this.APODService.getRangeOfAPOD(start, end);
    }

    getApod(date: string): Observable<APOD> {
        return this.APODService.getAPOD(date);
    }
}
