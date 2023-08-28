import { Injectable } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Injectable()
export class FormSandbox {
  constructor() {}

  initializeFormValues(
    rootFormGroup: FormGroupDirective,
    formGroupName: string
  ) {
    return rootFormGroup.control.get(formGroupName) as FormGroup;
  }
}
