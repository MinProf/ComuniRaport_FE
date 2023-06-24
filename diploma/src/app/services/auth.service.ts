import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable, tap} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userLoggedIn: boolean = false;
  constructor(private http: HttpClient, private router: Router) {}
  login(email: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${environment.baseUrl}/auth/authenticate`, {email, password}, {
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .pipe(
        tap((res) => {
          localStorage.setItem('access_token', res.access_token)
          localStorage.setItem('refresh_token', res.refresh_token)
          this.router.navigate(['/welcome']);
        })
      );
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }

  isLoggedIn() {
    this.userLoggedIn = true;
    return !!this.getAccessToken();
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.router.navigate(['/auth']);
  }
}
