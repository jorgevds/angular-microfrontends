import { HttpClientTestingModule, HttpTestingController } from "@Angular/common/http/testing";
import { fakeAsync, flush, TestBed } from "@angular/core/testing";
import { APOD } from "@common/types/interface";
import { environment } from "@environments/environment";

import { APODService } from "./apod.service";

describe("APODService", () => {
    let service: APODService;
    let httpMock: HttpTestingController;

    const ApiKey = environment.NASA_KEY;
    const baseUrl = "https://api.nasa.gov/planetary/apod?api_key=";

    const formValue = { start_date: "2021-10-12", end_date: "2021-10-13" };
    const singleApodDate = formValue.start_date;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [APODService],
        });
        service = TestBed.inject(APODService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });

    describe("WHEN requesting range of APODS", () => {
        const url =
            baseUrl +
            ApiKey +
            "&start_date=" +
            formValue.start_date +
            "&end_date=" +
            formValue.end_date;

        let mockedResponse = [
            {
                date: "string",
                explanation: "string",
                hdurl: "string",
                media_type: "string",
                service_version: "string",
                title: "string",
                url: "string",
            },
        ];

        let apods: APOD[];

        beforeEach(fakeAsync(() => {
            spyOn(service, "getRangeOfAPOD").and.callThrough();

            service
                .getRangeOfAPOD(formValue.start_date, formValue.end_date)
                .subscribe((res) => {
                    apods = res;
                });

            flush();
        }));

        it("SHOULD issue a GET request with the correct url", fakeAsync(() => {
            const req = httpMock.expectOne(url);

            expect(req.request.method).toEqual("GET");
        }));

        it("SHOULD return an observable value", () => {
            httpMock.expectOne(url).flush(mockedResponse);

            expect(apods).toEqual(mockedResponse);
        });

        afterEach(() => {
            httpMock.verify();
        });
    });

    describe("WHEN requesting one APOD", () => {
        const url = baseUrl + ApiKey + "&date=" + singleApodDate;

        let mockedResponse = {
            date: "string",
            explanation: "string",
            hdurl: "string",
            media_type: "string",
            service_version: "string",
            title: "string",
            url: "string",
        };
        let apod: APOD;

        beforeEach(fakeAsync(() => {
            spyOn(service, "getAPOD").and.callThrough();

            service.getAPOD(singleApodDate).subscribe((res) => {
                apod = res;
            });
        }));

        it("SHOULD issue a GET request with the correct url", fakeAsync(() => {
            const req = httpMock.expectOne(url);

            expect(req.request.method).toEqual("GET");
        }));

        it("SHOULD return an observable value", () => {
            httpMock.expectOne(url).flush(mockedResponse);

            expect(apod).toEqual(mockedResponse);
        });

        afterEach(() => {
            httpMock.verify();
        });
    });

    describe("WHEN spying on the service", () => {
        let rightSpy: jasmine.Spy;
        let wrongSpy: jasmine.Spy;

        const checkSpies = () => {
            expect(rightSpy).toHaveBeenCalledTimes(1);
            expect(wrongSpy).not.toHaveBeenCalled();
        };

        it("SHOULD call only getRangeOfAPOD", fakeAsync((done: DoneFn) => {
            let apods;
            rightSpy = spyOn(service, "getRangeOfAPOD").and.callThrough();
            wrongSpy = spyOn(service, "getAPOD").and.callThrough();

            service
                .getRangeOfAPOD(formValue.start_date, formValue.end_date)
                .subscribe((res) => {
                    apods = res;
                    done();
                });

            checkSpies();
        }));

        it("SHOULD call only getAPOD", fakeAsync((done: DoneFn) => {
            rightSpy = spyOn(service, "getAPOD").and.callThrough();
            wrongSpy = spyOn(service, "getRangeOfAPOD").and.callThrough();

            service.getAPOD(singleApodDate).subscribe(() => {
                done();
            });

            checkSpies();
        }));
    });
});
