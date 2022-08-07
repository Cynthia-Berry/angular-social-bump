import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";
import {lastValueFrom} from "rxjs";
import {DisplayService} from "../../../shared/services/display.service";
import {HttpErrorResponse} from "@angular/common/http";

class PhotoContent {
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Output() photos: EventEmitter<PhotoContent[]> = new EventEmitter();
  @Output() searchText: EventEmitter<string> = new EventEmitter();
  public data!: any;
  public keyword!: string;

  constructor(private _apiService: ApiService, private _displayService: DisplayService) {
  }

  ngOnInit(): void {
  }

  async searchPhotos(keyword: string) {
    try {
      const responseData = await lastValueFrom(this._apiService.fetchPhotos(keyword.toLowerCase()));
      if (responseData.stat === 'ok') {
        this.data = responseData.photos.photo;
        this.photos.emit(this.data);
      } else {
        this._displayService.showToast(`${responseData.stat}: ${responseData.message}`, {
          classname: 'bg-danger text-light',
          delay: 6000
        });
      }
    } catch (e) {
      const error = e as HttpErrorResponse;
      this._displayService.showToast(`${error.status}: ${error.error.message}`, {
        classname: 'bg-danger text-light',
        delay: 6000
      });
    }
  }

  async onScroll(keyword: string) {
    console.log(keyword);
    if (keyword && keyword.length > 0) {
      const responseData = await lastValueFrom(this._apiService.fetchPhotos(keyword.toLowerCase()));
      if (responseData.stat === 'ok') {
        this.data= responseData.photos.photo;
        this.photos.emit(this.data);
      }
    }
  }

}
