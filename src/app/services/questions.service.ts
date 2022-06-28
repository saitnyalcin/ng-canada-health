import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import IQuestions from '../interfaces/IClientQuestions';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  constructor(private http: HttpClient) {}

  private _url: string = 'https://jsonplaceholder.typicode.com/posts';

  getQuestions(): Observable<IQuestions[]> {
    return this.http.get<IQuestions[]>(this._url);
  }
}
