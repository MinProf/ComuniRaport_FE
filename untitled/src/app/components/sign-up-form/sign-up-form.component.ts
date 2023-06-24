import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/user.model";
import {RegisterService} from "../../services/register.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent {
  showPassword = false
  signUpForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*\d).*$/)]],
    confirmPassword: ['',[Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*\d).*$/)]],
    county: ['', Validators.required],
    city: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$'), Validators.minLength(10)]]
  });

  constructor(private formBuilder: FormBuilder, private registerService: RegisterService, private router: Router) {}
  onFormSubmit() {
    if (this.signUpForm.valid) {
      const user: User = {
        firstName: this.signUpForm.value.firstName,
        lastName: this.signUpForm.value.lastName,
        email: this.signUpForm.value.email,
        password: this.signUpForm.value.password,
        county: this.signUpForm.value.county,
        city: this.signUpForm.value.city,
        phone: this.signUpForm.value.phone,
      }
      this.registerService.registerUser(user).subscribe();
      this.router.navigate(['/auth']);
    }
    else return;
  }

  isFormControlInvalid(fieldName: string) {
    const control = this.signUpForm.get(fieldName);
    return control?.invalid && (control.dirty || control.touched);
  }

  isFormControlError(fieldName: string, errorType: string): boolean {
    const control = this.signUpForm.get(fieldName);
    return control?.errors && control.errors[errorType];

  }

  isPasswordPatternError(): boolean {
    const passwordControl = this.signUpForm.get('password');
    return passwordControl?.errors && passwordControl.errors['pattern'];
  }

  isPasswordMatchError(): boolean {
    const passwordControl = this.signUpForm.get('password');
    const confirmPasswordControl = this.signUpForm.get('confirmPassword');
    return !!(passwordControl?.value !== confirmPasswordControl?.value && confirmPasswordControl?.dirty);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword
  }

  backButton() {
    this.router.navigate(['/auth']);
  }
}
