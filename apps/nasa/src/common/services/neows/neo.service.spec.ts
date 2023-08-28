import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@Angular/common/http/testing';
import { TestBed, fakeAsync, flush } from '@angular/core/testing';
import { DetailCometoid, Neo } from 'src/common/types/interface';
import { environment } from 'src/environments/environment';
import { NeoService } from './neo.service';

describe('NeoService', () => {
  let service: NeoService;
  let httpMock: HttpTestingController;

  const ApiKey = environment.NASA_KEY;
  const baseUrl = 'https://api.nasa.gov/neo/rest/v1/';

  const formValue = { start_date: '2021-10-12', end_date: '2021-10-13' };
  const cometId = '2086450';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NeoService],
    });
    service = TestBed.inject(NeoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('WHEN requesting a range of NeoWs', () => {
    const url =
      baseUrl +
      'feed?start_date=' +
      formValue.start_date +
      '&end_date=' +
      formValue.end_date +
      '&api_key=' +
      ApiKey;

    let mockedResponse = {
      links: {
        next: 'next',
        prev: 'prev',
        self: 'self',
      },
      element_count: 1,
      near_earth_objects: {
        '1996-08-15': [
          {
            links: {
              self: 'self',
            },
            id: '1',
            neo_reference_id: '1',
            name: 'Josh',
            nasa_jpl_url: 'url',
            absolute_magnitude_h: 1,
            estimated_diameter: {
              kilometers: {
                estimated_diameter_min: 1,
                estimated_diameter_max: 1,
              },
              meters: {
                estimated_diameter_min: 1,
                estimated_diameter_max: 1,
              },
              miles: {
                estimated_diameter_min: 1,
                estimated_diameter_max: 1,
              },
              feet: {
                estimated_diameter_min: 1,
                estimated_diameter_max: 1,
              },
            },
            is_potentially_hazardous_asteroid: false,
            close_approach_data: [
              {
                close_approach_date: 'date',
                close_approach_date_full: 'date',
                epoch_date_close_approach: 1,
                relative_velocity: {
                  kilometers_per_second: 'a lot',
                  kilometers_per_hour: 'a lot',
                  miles_per_hour: 'a lot',
                },
                miss_distance: {
                  astronomical: 'a lot',
                  lunar: 'a lot',
                  kilometers: 'a lot',
                  miles: 'a lot',
                },
                orbiting_body: 'Earth',
              },
            ],
            is_sentry_object: false,
          },
        ],
      },
    };

    let neows: Neo;

    beforeEach(fakeAsync(() => {
      spyOn(service, 'getRangeOfNeows').and.callThrough();

      service
        .getRangeOfNeows(formValue.start_date, formValue.end_date)
        .subscribe((res) => {
          neows = res;
        });

      flush();
    }));

    it('SHOULD issue a GET request with the correct url', fakeAsync(() => {
      const req = httpMock.expectOne(url);

      expect(req.request.method).toEqual('GET');
    }));

    it('SHOULD return an observable value', () => {
      httpMock.expectOne(url).flush(mockedResponse);

      expect(neows).toEqual(mockedResponse);
    });

    afterEach(() => {
      httpMock.verify();
    });
  });

  describe('WHEN requesting a cometoid', () => {
    const url = baseUrl + 'neo/' + cometId + '?api_key=' + ApiKey;

    let mockedResponse = {
      links: {
        self: 'self',
      },
      id: '1',
      neo_reference_id: '1',
      name: 'Josh',
      nasa_jpl_url: 'url',
      absolute_magnitude_h: 1,
      estimated_diameter: {
        kilometers: {
          estimated_diameter_min: 1,
          estimated_diameter_max: 1,
        },
        meters: {
          estimated_diameter_min: 1,
          estimated_diameter_max: 1,
        },
        miles: {
          estimated_diameter_min: 1,
          estimated_diameter_max: 1,
        },
        feet: {
          estimated_diameter_min: 1,
          estimated_diameter_max: 1,
        },
      },
      is_potentially_hazardous_asteroid: false,
      close_approach_data: [
        {
          close_approach_date: 'date',
          close_approach_date_full: 'date',
          epoch_date_close_approach: 1,
          relative_velocity: {
            kilometers_per_second: 'a lot',
            kilometers_per_hour: 'a lot',
            miles_per_hour: 'a lot',
          },
          miss_distance: {
            astronomical: 'a lot',
            lunar: 'a lot',
            kilometers: 'a lot',
            miles: 'a lot',
          },
          orbiting_body: 'Earth',
        },
      ],
      is_sentry_object: false,
    };

    let cometoid: DetailCometoid;

    beforeEach(fakeAsync(() => {
      spyOn(service, 'getCometoidDetail').and.callThrough();

      service.getCometoidDetail(cometId).subscribe((res) => {
        cometoid = res;
      });
    }));

    it('SHOULD issue a GET request with the correct url', fakeAsync(() => {
      const req = httpMock.expectOne(url);

      expect(req.request.method).toEqual('GET');
    }));

    it('SHOULD return an observable value', () => {
      httpMock.expectOne(url).flush(mockedResponse);

      expect(cometoid).toEqual(mockedResponse);
    });

    afterEach(() => {
      httpMock.verify();
    });
  });

  describe('WHEN spying on the service', () => {
    let rightSpy: jasmine.Spy;
    let wrongSpy: jasmine.Spy;

    const checkSpies = () => {
      expect(rightSpy).toHaveBeenCalledTimes(1);
      expect(wrongSpy).not.toHaveBeenCalled();
    };

    it('SHOULD only call getRangeOfNeows method', fakeAsync((done: DoneFn) => {
      rightSpy = spyOn(service, 'getRangeOfNeows').and.callThrough();
      wrongSpy = spyOn(service, 'getCometoidDetail').and.callThrough();

      service
        .getRangeOfNeows(formValue.start_date, formValue.end_date)
        .subscribe((res) => {
          expect(res).not.toBeNull();
          done();
        });

      checkSpies();
    }));

    it('SHOULD only call getCometoidDetail method', fakeAsync((
      done: DoneFn
    ) => {
      rightSpy = spyOn(service, 'getCometoidDetail').and.callThrough();
      wrongSpy = spyOn(service, 'getRangeOfNeows').and.callThrough();

      service.getCometoidDetail(cometId).subscribe((res) => {
        expect(res).not.toBeNull();
        done();
      });

      checkSpies();
    }));
  });
});
