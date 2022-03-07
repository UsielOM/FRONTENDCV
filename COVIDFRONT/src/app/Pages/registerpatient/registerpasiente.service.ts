import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Users } from '../../users';
import { environment } from '../../../environments/environment';


@Injectable({
    providedIn: 'root'
  })

  export class Registerpasienteservice {

  constructor(private http: HttpClient) { }

    createUser(user: Users): Observable<Users>{
        return this.http.post<Users>(
          environment.apiUrl +"/register", user
        );
      }

  }
