import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Photos} from "../../../models/photos";
import {ApiService} from "../../../shared/services/api.service";
import {lastValueFrom} from "rxjs";

class PhotoContent {
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Output() photos: EventEmitter<PhotoContent[]> = new EventEmitter();
  public data!: any;
  public keyword!: string;

  constructor(private _apiService: ApiService) {
  }

  ngOnInit(): void {
  }

  async searchPhotos(keyword: string) {
    try {
      const responseData = await lastValueFrom(this._apiService.fetchPhotos(keyword.toLowerCase()));
      if (responseData.stat === 'ok') {
        this.data = responseData.photos.photo;
        this.photos.emit(this.data);
      }else{
      //  DISPLAY ERROR CATCH ERROR
      }
    } catch (e) {
      console.log(e)
    }
  }

}
