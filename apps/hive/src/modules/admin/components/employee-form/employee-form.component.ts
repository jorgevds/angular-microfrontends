import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Employee } from 'common/entities/employee.entity';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  @Input() employee: Employee | null = null;
  @Output() editEmployee = new EventEmitter<Employee>();
  @Output() createEmployee = new EventEmitter<Employee>();

  constructor() {}

  ngOnInit(): void {}
}
