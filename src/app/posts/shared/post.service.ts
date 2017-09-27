import { Injectable } from '@angular/core';

import { Post } from './post';
import { POSTS } from './mock-posts';

@Injectable()
export class PostService {
  posts: Post[];

  constructor() {
    this.posts = [];
  }

  getPosts(): Promise<Post[]> {
    var arr:Post[] = [];

    arr = arr.concat(this.posts);
    arr = arr.concat(POSTS);

    return Promise.resolve(arr);
  }

  getPostsFromMemory(): Promise<Post[]> {
    return Promise.resolve(this.posts);
  }

  addPost(post: Post){
    this.posts.push(post);
    console.log(this.posts);
  }
  getPostArr(): Promise<Post[]>{
    return Promise.resolve(this.posts);
  }
}