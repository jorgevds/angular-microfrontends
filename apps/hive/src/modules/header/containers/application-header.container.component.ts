import { Component } from '@angular/core';

@Component({
  selector: 'application-header',
  templateUrl: './application-header.container.component.html',
  styleUrls: ['./application-header.container.component.scss']
})
export class ApplicationHeader {
  public title: string = 'Sweet Hive';
}
