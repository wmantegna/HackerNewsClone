import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `

<nav class="navbar navbar-toggleable-md navbar-light bg-faded">
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#">HackerNews</a>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" routerLink="/" routerLinkActive="active">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/posts/new">New Post</a>
      </li>
    </ul>
  </div>
</nav>

<router-outlet></router-outlet>
  `
})
export class AppComponent  { name = 'Angular'; }