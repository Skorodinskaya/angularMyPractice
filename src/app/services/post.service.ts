import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../modules/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts?userId='

  constructor(private httpClient: HttpClient) {
  }

  getPost(id: number):Observable<Post[]>{
    return this.httpClient.get<Post[]>(this.url + id);
  }
}
