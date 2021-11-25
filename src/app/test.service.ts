import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Questions } from 'src/question';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }
  url="./assets/angular.json";
  urlnode="./assets/node.json"

  getQuestions():Observable<Questions[]>{
      return this.http.get<Questions[]>(this.url);
}
getQuestionsNode():Observable<Questions[]>{
  return this.http.get<Questions[]>(this.urlnode);
}
}
