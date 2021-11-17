import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {RouterModule} from "@angular/router";
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';
import {UsersResolveService} from "./services/users-resolve.service";
import {CommentsComponent} from './components/comments/comments.component';
import {CommentComponent} from './components/comment/comment.component';
import {CommentDetailsComponent} from './components/comment-details/comment-details.component';
import {CommentsResolveService} from "./services/comments-resolve.service";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'users',
        component: UsersComponent,
        children: [
          {
            path: ':id', component: UserDetailsComponent,
            resolve: {data: UsersResolveService}
          }
        ]
      },

      {
        path: 'posts',
        component: PostsComponent
      },

      {
        path: 'comments',
        component: CommentsComponent,
        children: [
          {
            path: ':id', component: CommentDetailsComponent,
            resolve: {data: CommentsResolveService}
          }
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
