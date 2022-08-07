import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../../shared/services/api.service";
import {lastValueFrom} from "rxjs";
import {Photo} from "../../../models/photo";
import {DisplayService} from "../../../shared/services/display.service";

@Component({
  selector: 'app-photo-search-detail',
  templateUrl: './photo-search-detail.component.html',
  styleUrls: ['./photo-search-detail.component.scss']
})
export class PhotoSearchDetailComponent implements OnInit {
  public photo!: Photo;
  public imageUrl!: string;

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private _apiService: ApiService,
              private _displayService: DisplayService) {
    this._activatedRoute.params.subscribe(async params => {
      if (params['id']) {
        await this._activatedRoute.queryParams.subscribe(async queryParams => {
          if (queryParams['secret']) {
            await this.getPhoto(params['id'], queryParams['secret']);
          } else {
            this._displayService.showToast(`You do not have permission to view this Information`, {
              classname: 'bg-danger text-light',
              delay: 6000
            });
            await this._router.navigate(['/dashboard']);
          }
        })
      } else {
        this._displayService.showToast(`Failed to retrieve photo Information`, {
          classname: 'bg-danger text-light',
          delay: 6000
        });
        await this._router.navigate(['/dashboard']);
      }
    })
  }

  ngOnInit(): void {
  }

  async getPhoto(id: string, secret: string | null) {
    this._displayService.showLoader();
    const responseData = await lastValueFrom(this._apiService.fetchPhotoById(id, secret));
    if (responseData.stat === 'ok') {
      this._displayService.hideLoader();
      this.imageUrl = `https://farm${responseData.photo.farm}.staticflickr.com/${responseData.photo.server}/${responseData.photo.id}_${responseData.photo.secret}.jpg`
      this.photo = responseData.photo;
    } else {
      this._displayService.hideLoader();
      this._displayService.showToast(`${responseData.stat}: ${responseData.message}`, {
        classname: 'bg-danger text-light',
        delay: 6000
      });
    }
  }

}
