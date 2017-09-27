import { Component, OnInit, Input } from '@angular/core';

import { Post } from './shared/post';
import { PostService } from './shared/post.service';

@Component({
  selector: 'post-list',
  template: `
  <div class="container-fluid">
    <div *ngFor="let post of posts; let i = index" class="row">
      <div class="col" style="max-width: 25px; margin: auto 0;">{{i}}.</div>
      <div class="col-11">
        <span style="color: black">{{post.title}}</span> <span *ngIf="post.url">(<a href="{{post.url}}">{{post.url}}</a>)</span><br>
        <small>{{post.score}} points</small>
      </div>
    </div>
  </div>
`,
  providers: [ PostService ]
})
export class PostListComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService) { }
  
  @Input()
  set name(posts: Post[]) {
    this.posts = posts;
  }

  ngOnInit(): void {
    if (!this.posts || this.posts.length < 1){
      this.getPosts();
    }
  }

  getPosts(): void {
    this.postService.getPosts().then(posts => {
      this.posts = posts.sort((p1, p2) => p2.score - p1.score);
    });
  }
}
