import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from './shared/post';
import { PostService } from './shared/post.service';

@Component({
 selector: 'post-form',
 template: `
<div class="container-fluid">
  <h1>New Post</h1>
  <form (ngSubmit)="onSubmit()" #postForm="ngForm">
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" class="form-control" id="title"
        required
        [(ngModel)]="model.title" name="title">
    </div>

    <div class="form-group">
      <label for="url">Url</label>
      <input type="text" class="form-control" id="url"
        required
        [(ngModel)]="model.url" name="url">
    </div>

    <button type="submit" class="btn btn-success" [disabled]="!postForm.form.valid">Submit</button>
    <button type="button" class="btn btn-default" (click)="newPost(); postForm.reset()">Reset</button>
  </form>

  <h3>List of posts stored in memory</h3>
  <ul>
    <li *ngFor="let post of posts">
      {{post.toJson()}}
    </li>
  <ul>
`,
  providers: [ PostService ]
})
export class PostFormComponent {
  posts:Post[] = [];
  model = new Post();

  constructor(private postService: PostService, private router: Router) {
    this.newPost();
  }

  onSubmit() { 
    this.postService.addPost(this.model);
    this.newPost();

    // because we can't persist data, let's display it instead of routing back to homepage
    // this.router.navigate(['/login']);
    this.getPosts();
  }

  getPosts(){
    this.postService.getPostsFromMemory().then(posts => {
      this.posts = posts.sort((p1, p2) => p2.score - p1.score);
    });
  }

  newPost() {
    this.model = new Post();
  }
}