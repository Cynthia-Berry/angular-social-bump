import {Component, Input, OnInit} from '@angular/core';
import {PhotoContent, PhotoResult} from "../../../models/photos";
import {Router} from "@angular/router";


@Component({
  selector: 'app-photo-search',
  templateUrl: './photo-search.component.html',
  styleUrls: ['./photo-search.component.scss']
})

export class PhotoSearchComponent implements OnInit {
  @Input() photoData!: PhotoContent[];
  public photos: PhotoResult[] = [];


  constructor(private _router: Router) {
  }

  ngOnInit(): void {
    this.formatData(this.photoData);
  }

  formatData(data: any[]) {
    data.map(result => {
      const resultObject: PhotoResult = {
        id: result.id,
        title: result.title,
        imgUrl: `https://farm${result.farm}.staticflickr.com/${result.server}/${result.id}_${result.secret}.jpg`,
        secret: result.secret
      }
      this.photos.push(resultObject)
    });
  }

  onScroll() {
  }

  getPhoto(photo: PhotoResult) {
    if (photo.id && photo.secret) {
      this._router.navigate([`photo/${photo.id}`], {queryParams: {secret: photo.secret}})
    } else {
      //  DISPLAY, YOU DO NOT HAVE PERMISSIONS TO VIEW THIS DETAILS
    }
  }
}
