import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@Angular/common/http/testing';
import { ApodSandbox } from './apod-sandbox.service';

describe('ApodSandbox', () => {
  let sandbox: ApodSandbox;

  const formValue = { start_date: '2021-10-12', end_date: '2021-10-13' };
  const singleApodDate = '2021-10-12';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApodSandbox],
    });
    sandbox = TestBed.inject(ApodSandbox);
  });

  describe('WHEN spying on the sandbox', () => {
    let rightSpy: jasmine.Spy;
    let wrongSpy: jasmine.Spy;

    const checkSpies = () => {
      expect(rightSpy).toHaveBeenCalledTimes(1);
      expect(wrongSpy).not.toHaveBeenCalled();
    };

    it('SHOULD only call the getRangeOfAPOD method', () => {
      rightSpy = spyOn(sandbox, 'getRangeOfAPOD').and.callThrough();
      wrongSpy = spyOn(sandbox, 'getApod').and.callThrough();

      sandbox.getRangeOfAPOD(formValue.start_date, formValue.end_date);

      checkSpies();
    });

    it('SHOULD only call the getAPOD method', () => {
      rightSpy = spyOn(sandbox, 'getApod').and.callThrough();
      wrongSpy = spyOn(sandbox, 'getRangeOfAPOD').and.callThrough();

      sandbox.getApod(singleApodDate);

      checkSpies();
    });
  });
});
