import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MainComponent } from './blog/main/main.component';
import { CommentsComponent } from './blog/comments/comments.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule


  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MainComponent, CommentsComponent]
})
export class AppModule { }
