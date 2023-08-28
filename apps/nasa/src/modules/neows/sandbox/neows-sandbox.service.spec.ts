import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@Angular/common/http/testing';
import { NeowsSandbox } from './neows-sandbox.service';

describe('ApodSandbox', () => {
  let service: NeowsSandbox;

  const formValue = { start_date: '2021-10-12', end_date: '2021-10-13' };
  const singleApodDate = '2021-10-12';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NeowsSandbox],
    });
    service = TestBed.inject(NeowsSandbox);
  });

  describe('WHEN spying on the sandbox', () => {
    let rightSpy: jasmine.Spy;
    let wrongSpy: jasmine.Spy;

    const checkSpies = () => {
      expect(rightSpy).toHaveBeenCalledTimes(1);
      expect(wrongSpy).not.toHaveBeenCalled();
    };

    it('SHOULD only call the getRangeOfNeows method', () => {
      rightSpy = spyOn(service, 'getRangeOfNeows').and.callThrough();
      wrongSpy = spyOn(service, 'setupCometoid').and.callThrough();

      service.getRangeOfNeows(formValue.start_date, formValue.end_date);

      checkSpies();
    });

    it('SHOULD only call the setupCometoid method', () => {
      rightSpy = spyOn(service, 'setupCometoid').and.callThrough();
      wrongSpy = spyOn(service, 'getRangeOfNeows').and.callThrough();

      service.setupCometoid(singleApodDate);

      checkSpies();
    });
  });
});
