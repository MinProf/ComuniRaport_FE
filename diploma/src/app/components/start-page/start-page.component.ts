import { Component } from '@angular/core';
import {User} from "../../models/user.model";
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent {
  constructor(private router: Router) {}
  user!: User
  userMock = {
    firstName: 'Popescu',
    lastName: 'Ion',
  }

  steps: MenuItem[] = [
    {
      label: 'Intra pe harta',
    },
    {
      label: 'Click locatie',
    }
  ]
  goToMap() {
    this.router.navigate(['/map']);
  }
}
