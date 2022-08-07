import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {PhotoSearchComponent} from './modules/pages/photo-search/photo-search.component';
import {PhotoSearchDetailComponent} from './modules/pages/photo-search-detail/photo-search-detail.component';
import {HomeComponent} from "./modules/pages/home/home.component";
// import {ToastsComponent} from "./toasts.component";


// const ngxUiLoaderConfig: NgxUiLoaderConfig = {
//   "bgsColor": "#444343",
//   "bgsOpacity": 0.5,
//   "bgsPosition": "bottom-right",
//   "bgsSize": 80,
//   "bgsType": "ball-spin-clockwise",
//   "blur": 3,
//   "delay": 0,
//   "fastFadeOut": true,
//   "fgsColor": "#2c3891",
//   "fgsPosition": "center-center",
//   "fgsSize": 60,
//   "fgsType": "double-bounce",
//   "gap": 10,
//   "overlayBorderRadius": "0",
//   "overlayColor": "rgba(40,40,40,0.5)",
//   "pbColor": "#2c3891",
//   "pbDirection": "ltr",
//   "pbThickness": 3,
//   "hasProgressBar": false,
// };


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotoSearchComponent,
    PhotoSearchDetailComponent,
    // ToastsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    FormsModule,
    // NgbToastModule,
    // NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
  ], exports: [
    // NgbToastModule,
    // NgxUiLoaderModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
