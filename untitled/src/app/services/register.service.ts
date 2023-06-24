import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";
import {environment} from "../../environments/environment";

@Injectable()
export class RegisterService {
  constructor(private http: HttpClient) {}

  registerUser(user: User) {
    return this.http.post<User>(`${environment.baseUrl}/auth/register`, user, {
      headers: {
        'Content-Type': 'application/json'
      },
    });
  }
}
