import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/components/header/header.component';
import { PhotoSearchComponent } from './modules/pages/photo-search/photo-search.component';
import { PhotoSearchDetailComponent } from './modules/pages/photo-search-detail/photo-search-detail.component';
import {HomeComponent} from "./modules/pages/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PhotoSearchComponent,
    PhotoSearchDetailComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        InfiniteScrollModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
