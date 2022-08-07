import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../../shared/services/api.service";
import {lastValueFrom} from "rxjs";
import {Photo} from "../../../models/photo";

@Component({
  selector: 'app-photo-search-detail',
  templateUrl: './photo-search-detail.component.html',
  styleUrls: ['./photo-search-detail.component.scss']
})
export class PhotoSearchDetailComponent implements OnInit {
  public photo!: Photo;
  public imageUrl!: string;

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private _apiService: ApiService) {
    this._activatedRoute.params.subscribe(async params => {
      if(params['id']){
        await this._activatedRoute.queryParams.subscribe(async queryParams => {
          await this.getPhoto(params['id'], queryParams['secret']);
        })
      }
    })
  }

  ngOnInit(): void {
  }

  async getPhoto(id: string, secret: string|null) {
    const responseData = await lastValueFrom(this._apiService.fetchPhotoById(id, secret));
    console.log(responseData.photo)
    if (responseData.stat === 'ok') {
      this.imageUrl = `https://farm${responseData.photo.farm}.staticflickr.com/${responseData.photo.server}/${responseData.photo.id}_${responseData.photo.secret}.jpg`
      this.photo = responseData.photo;
      // console.log(this.photo)
    }
  }

}
