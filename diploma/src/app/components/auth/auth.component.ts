import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

constructor(private router:Router, private route:ActivatedRoute, private authService: AuthService) {}


  onSubmit() {
  const email = this.loginForm.value.email;
  const password = this.loginForm.value.password;
  this.authService.login(email, password).subscribe( () => {
    this.router.navigate(['/welcome']);
  })
  }
}
