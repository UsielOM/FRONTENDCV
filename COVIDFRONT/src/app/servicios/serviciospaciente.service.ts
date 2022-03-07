import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from "../../environments/environment";
import { Users } from "../users";
import { Vitalsignos } from "../Vitalsignos";

@Injectable({
  providedIn: 'root'
})
export class ServiciospacienteService {

  constructor(private http: HttpClient) { }

  getPacientes(): Observable<Users[]>{
    return this.http.get<Users[]>(
      environment.apiUrl +'/Getpacientes');
  };

  addvitalsigpt(vs: Vitalsignos):Observable<Vitalsignos>{
    return this.http.post<Vitalsignos>(
      environment.apiUrl+'/addRegsigvitalp',vs
    );
  };

  getvitalsigpi(Id: string): Observable<any>{
    return this.http.get<any>(
      environment.apiUrl+"/Getvitaltempid/"+ Id );
  };

  getallvitalsig(): Observable<Vitalsignos[]>{
    return this.http.get<Vitalsignos[]>(
      environment.apiUrl +'/Getvitalsigall');
  };

  getuPaciente(id:string){
    return this.http.get( '${this.API_URI}/lsitapacientes/${id}');
  }

  actualizaPaciente(){
    return 0;
  }

  borrapaciente(){

  }



}
