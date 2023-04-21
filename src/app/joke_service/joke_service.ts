import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  constructor(private http: HttpClient) { }


  getRandomJoke(): Observable<any> {
    return this.http.get('https://official-joke-api.appspot.com/random_joke');
  }
}
