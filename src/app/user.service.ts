import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { JsonResponse } from './JsonResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl: string = 'http://localhost:51474/Users/';
  list(): Observable<JsonResponse> {
    return this.http.get(this.baseurl + 'List/') as Observable<JsonResponse>;
  }
  get(id: number): Observable<JsonResponse> {
    return this.http.get(this.baseurl + 'Get/' + id) as Observable<JsonResponse>;
  }
  constructor(private http: HttpClient) { }
}
