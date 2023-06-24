import {Component} from '@angular/core';
import {User} from "../../models/user.model";
import {MenuItem} from "primeng/api";


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  constructor() { }
  showPassword: boolean = false;
  userDetails!: User
  userMock: User = {
    firstName: 'Ion',
    lastName: 'Popescu',
    email: 'popescu.i@gmail.com',
    county: 'Hunedoara',
    city: 'Deva',
    phone: 0o71234567,
    password: 'Test1212',
    currentPassword: 'Test1212',
    confirmPassword: 'Test1212',
    newPassword: 'Test1212',
  }
  steps: MenuItem[] = [
    {command: () => {this.onActiveIndexChange(0)}},
    {command: () => {this.onActiveIndexChange(1)}},
  ]
  activeIndex: number = 0;
  onActiveIndexChange(event: any) {
    this.activeIndex = event
  }
  changePasswordButton() {
    this.onActiveIndexChange(1);
  }

  backButton() {
    this.onActiveIndexChange(0);
  }

  onSubmitUserDetails(userDetails: User) {
    this.userDetails = userDetails
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword
  }
}
