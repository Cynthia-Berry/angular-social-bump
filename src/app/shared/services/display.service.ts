/* LOADER SOURCE: https://www.npmjs.com/package/ngx-ui-loader,
 https://tdev.app/ngx-ui-loader,
  https://tdev.app/ngx-ui-loader/demo/
 */
import {Injectable, TemplateRef} from '@angular/core';
import {NgxUiLoaderService} from "ngx-ui-loader";
// import {NgxUiLoaderService} from 'ngx-ui-loader';


@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  public toasts: any[] = [];

  constructor(private _ngxService: NgxUiLoaderService) {
  }

  showLoader() {
    this._ngxService.start();
  }

  hideLoader() {
    this._ngxService.stop();
  }

  showToast(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({textOrTpl, ...options});
  }

  hideToast(toast: any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
