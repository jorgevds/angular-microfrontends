import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, EMPTY, Observable } from "rxjs";

import { APOD } from "../../../common/types/interface";
import { environment } from "../../../environments/environment";

@Injectable({ providedIn: "root" })
export class ApplicationService {
    private baseUrl: string = "https://api.nasa.gov/planetary/apod";

    params = { api_key: environment.NASA_KEY };

    constructor(private http: HttpClient) {}

    public setupAPODForImgUrl(date: string): Observable<APOD> {
        const params = {
            ...this.params,
            date,
        };

        return this.http.get<APOD>(`${this.baseUrl}?`, { params }).pipe(
            catchError((e) => {
                console.error("ApplicationService - error fetching APOD", e);
                return EMPTY;
            })
        );
    }
}
