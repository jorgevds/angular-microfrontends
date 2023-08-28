import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'application-header-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.scss']
})
export class UserDropdownComponent implements OnInit {
  public currentUser: string = 'Jorge Van de Sompel';
  public dropdownOpen: boolean = false;

  constructor(private readonly router: Router) {
  }
  ngOnInit(): void {}

  public toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  signOut(): void {
    this.router.navigate(['/login']);
  }
}
