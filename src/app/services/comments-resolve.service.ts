import { Injectable } from '@angular/core';
import {CommentService} from "./comment.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Comment} from "../modules/comment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentsResolveService implements Resolve<Comment>{

  constructor(private commentService: CommentService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Comment> | Promise<Comment> | Comment {
    return this.commentService.getComment(+route.params['id'])
  }
}
