import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Raport} from "../models/raport.model";
@Injectable()
export class MarkersService {
  constructor(private http: HttpClient) {}


  fetchReports() {
    return this.http.get<Raport[]>(`http://localhost:9090/api/v1/report/getReports`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        'Accept':  '*/*',
        'Access-Control-Allow-Origin': '*'
      },
    });
  }

  addReport(raport: Raport) {
    return this.http.post<Raport>(`http://localhost:9090/api/v1/report/add`, raport, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        'Accept':  '*/*',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }


  deleteRaport(item: Raport) {
    return this.http.delete<Raport>(`http://localhost:9090/api/v1/report/delete/${item.id}`, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
      }
    });}
}
