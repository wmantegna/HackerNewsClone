import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { PostComponent }  from './posts/post.component';
import { PostListComponent }  from './posts/post-list.component';
import { PostFormComponent }  from './posts/post-form.component';

const appRoutes: Routes = [
  { path: 'posts/new', component: PostFormComponent },
  { path: '',          component: PostListComponent }
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ), 
    BrowserModule,
    FormsModule
  ],
  declarations: [ 
    AppComponent, 
    PostComponent, 
    PostFormComponent, 
    PostListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
