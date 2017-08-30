import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { PageHeaderComponent } from './page-header/page-header.component'
import { AssignmentBodyComponent } from './assignment-body/assignment-body.component'

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    AssignmentBodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
