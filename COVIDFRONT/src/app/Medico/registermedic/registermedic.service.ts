import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Medics } from "../../medics";
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class RegistermedicService {

  constructor(private http: HttpClient) { }

  createUser(userm: Medics): Observable<Medics>{
    return this.http.post<Medics>(
      environment.apiUrl +"/registermedic", userm
    );
  }

}
