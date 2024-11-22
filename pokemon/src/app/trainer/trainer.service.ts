import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, Observable, throwError } from 'rxjs';

import { Trainer } from '../trainer/Trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  private apiUrl: string = environment.baseUrl + 'trainers.json';

  constructor(private http: HttpClient) {}

  getTrainers(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(this.apiUrl)
  }

  getTrainer(id: string): Observable<Trainer> {
    return this.http.get<Trainer>(this.apiUrl + id + '/trainers.json');
  }

}
