import {AuthService} from "../services/auth.service";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const access_token = this.authService.getAccessToken();
    let request = req

    if (access_token) {
      request = req.clone({
        setHeaders: {
          Authorization: `Bearer ${access_token}`,
        },
      });
    }
    return next.handle(req)
  }
}
