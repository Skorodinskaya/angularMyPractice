import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../modules/post";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  @Input()
  id: number;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPost(this.id).subscribe(value => {this.posts = value});
  }

}
