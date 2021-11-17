import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Comment} from "../../modules/comment";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent {

  comment: Comment;

  constructor(private activatedRoute: ActivatedRoute) {

    this.activatedRoute.data.subscribe(value => this.comment = value['data']);
  }

}
