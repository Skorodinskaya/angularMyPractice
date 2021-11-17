import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comment} from "../modules/comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url = 'https://jsonplaceholder.typicode.com/comments'

  constructor(private httpClient: HttpClient) {
  }

  getComments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(this.url);
  }

  getComment(id: number):Observable<Comment>{
    return this.httpClient.get<Comment>(this.url + '/' + id);
  }
}
