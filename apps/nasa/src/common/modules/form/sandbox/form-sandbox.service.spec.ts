import { fakeAsync, flush, TestBed } from '@angular/core/testing';
import {
  ControlContainer,
  FormBuilder,
  FormControl,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormSandbox } from './form-sandbox.service';

describe('FormSandbox', () => {
  let sandbox: FormSandbox;
  let rootFormGroup: FormGroupDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      providers: [
        FormSandbox,
        FormGroupDirective,
        { provide: ControlContainer, useValue: rootFormGroup },
      ],
    });
    sandbox = TestBed.inject(FormSandbox);
  });

  it('should create', () => {
    expect(sandbox).not.toBeNull();
  });

  describe('WHEN spying on the sandbox', () => {
    const formBuilder: FormBuilder = new FormBuilder();
    let formGroupName: 'Form';
    let spy: jasmine.Spy;

    beforeEach(fakeAsync(() => {
      spy = spyOn(sandbox, 'initializeFormValues').and.callThrough();

      rootFormGroup = new FormGroupDirective([], []);
      rootFormGroup.form = formBuilder.group({
        formFields: new FormControl('test'),
      });

      sandbox.initializeFormValues(rootFormGroup, formGroupName);
      flush();
    }));

    it('SHOULD call the initializeFormValues method', () => {
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
