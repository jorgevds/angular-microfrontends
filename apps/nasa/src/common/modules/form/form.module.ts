import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { DateFormComponent } from './components/date-form/date-form.component';
import { FormSandbox } from './sandbox/form-sandbox.service';

@NgModule({
  declarations: [DateFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [FormSandbox, FormGroupDirective],
  exports: [DateFormComponent],
})
export class FormModule {}
