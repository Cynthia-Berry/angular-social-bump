import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";

import {Photo} from "../../models/photo";
import {Photos} from "../../models/photos";
import {PhotosResponseObj, PhotoResponseObj} from "../../models/response";
import {environment as env} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = env.API_URL.BASE_URL;
  private API_KEY = env.API_URL.FLICKR_API_KEY;

  constructor(private _httpClient: HttpClient) {
  }

  fetchPhotos(keyword: string): Observable<PhotosResponseObj<Photos>> {
    const params = `/?method=flickr.photos.search&api_key=${this.API_KEY}&text=${keyword}&format=json&nojsoncallback=1&per_page=12`;
    return this._httpClient.get<PhotosResponseObj<Photos>>(`${this.BASE_URL}${params}`)
  }

  fetchPhotoById(id: string, secret: string | null): Observable<PhotoResponseObj<Photo>> {
    const params = `/?method=flickr.photos.getInfo&api_key=${this.API_KEY}&photo_id=${id}&secret=${secret}&format=json&nojsoncallback=1`
    return this._httpClient.get<PhotoResponseObj<Photo>>(`${this.BASE_URL}${params}`)
  }


}
