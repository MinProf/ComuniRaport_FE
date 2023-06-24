import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  constructor(private router: Router, private authService: AuthService) {}
  notifications: {label: string, value: string}[] = [
    {label: '', value: ''},
    {label: 'Notification 1', value: 'Notification 1'},
    {label: 'Notification 2', value: 'Notification 2'},
    {label: 'Notification 3', value: 'Notification 3'},
  ]

  logOut() {
    this.authService.logout();
  }
}
