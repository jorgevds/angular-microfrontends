import { HttpClientTestingModule, HttpTestingController } from "@Angular/common/http/testing";
import { fakeAsync, flush, TestBed } from "@angular/core/testing";
import { map } from "rxjs/operators";

import { environment } from "../../../environments/environment";
import { ApplicationService } from "./application.service";

describe("ApplicationService", () => {
    let service: ApplicationService;
    let httpMock: HttpTestingController;

    const ApiKey = environment.NASA_KEY;
    const baseUrl = "https://api.nasa.gov/planetary/apod?api_key=";

    const today = new Date().toJSON().slice(0, 10);

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ApplicationService],
        });
        service = TestBed.inject(ApplicationService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });

    describe("WHEN requesting one APOD", () => {
        const url = baseUrl + ApiKey + "&date=" + today;

        let mockedResponse = {
            date: "string",
            explanation: "string",
            hdurl: "string",
            media_type: "string",
            service_version: "string",
            title: "string",
            url: "string",
        };
        let apodUrl: string;

        beforeEach(fakeAsync(() => {
            spyOn(service, "setupAPODForImgUrl").and.callThrough();

            service
                .setupAPODForImgUrl(today)
                .pipe(map((res) => res.url))
                .subscribe((imgUrl) => {
                    apodUrl = imgUrl;
                });

            flush();
        }));

        it("SHOULD issue a GET request with the correct url", fakeAsync(() => {
            const req = httpMock.expectOne(url);

            expect(req.request.method).toEqual("GET");
        }));

        it("SHOULD return an observable value", () => {
            httpMock.expectOne(url).flush(mockedResponse);

            expect(apodUrl).toEqual(mockedResponse.url);
        });

        afterEach(() => {
            httpMock.verify();
        });
    });
});
