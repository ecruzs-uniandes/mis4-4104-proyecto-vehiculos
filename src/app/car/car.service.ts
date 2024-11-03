import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = environment.baseUrl + "202212_MISW4104_Grupo1.json"

constructor(private http: HttpClient) { }

getCars(): Observable<Car[]> {
  return this.http.get<Car[]>(this.apiUrl);
}

}
