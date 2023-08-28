import { TestBed } from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormService } from './form.service';

describe('FormService', () => {
  let service: FormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      providers: [FormService],
    });
    service = TestBed.inject(FormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('WHEN building the form', () => {
    const today = new Date().toJSON().slice(0, 10);
    const lastWeek = new Date(Date.now() - 6 * 24 * 60 * 60 * 1000)
      .toJSON()
      .slice(0, 10);

    let form: FormGroup;

    beforeEach(() => {
      form = service.buildDateForm();
    });

    it('SHOULD have start_date as last week', () => {
      expect(form.get('start_date')!.value).toBe(lastWeek);
    });
    it('SHOULD have end_date as today', () => {
      expect(form.get('end_date')!.value).toBe(today);
    });
  });
});
