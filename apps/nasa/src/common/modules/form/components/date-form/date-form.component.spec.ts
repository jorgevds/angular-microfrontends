import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ControlContainer,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormSandbox } from '../../sandbox/form-sandbox.service';

import { DateFormComponent } from './date-form.component';

describe('DateFormComponent', () => {
  let component: DateFormComponent;
  let fixture: ComponentFixture<DateFormComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  let rootFormGroup: FormGroupDirective;
  let test: FormControlName;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [ReactiveFormsModule, FormsModule, CommonModule],
      providers: [
        FormSandbox,
        FormGroupDirective,
        DateFormComponent,
        { provide: ControlContainer, useValue: rootFormGroup },
      ],
    }).compileComponents();
    // component = TestBed.inject(DateFormComponent);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateFormComponent);
    component = fixture.componentInstance;

    component.formGroupName = 'formFields';
    component.form = formBuilder.group({
      formFields: { start_date: '2021-10-19', end_date: '2021-10-20' },
    });

    rootFormGroup = new FormGroupDirective([], []);

    rootFormGroup.addControl(test);
    fixture.detectChanges();
  });

  //   it('should create', () => {
  //     rootFormGroup = new FormGroupDirective([], []);
  //     rootFormGroup.form = formBuilder.group({
  //       formFields: new FormControl(''),
  //     });
  //     expect(component).toBeDefined();
  //   });
});
