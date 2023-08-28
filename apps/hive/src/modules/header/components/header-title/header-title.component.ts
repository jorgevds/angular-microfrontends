import { Component } from '@angular/core';

@Component({
  selector: 'application-header-title',
  templateUrl: './header-title.component.html',
  styleUrls: ['./header-title.component.scss']
})
export class HeaderTitleComponent {
  public title: string = 'Sweet Hive';
}
