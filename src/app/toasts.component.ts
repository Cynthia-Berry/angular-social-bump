// import {Component, TemplateRef} from '@angular/core';
// import {DisplayService} from "./shared/services/display.service";
//
//
// @Component({
//   selector: 'app-toasts',
//   template: `
//     <ngb-toast *ngFor="let toast of _displayService.toasts"
//                [class]="toast.classname"
//                [autohide]="true"
//                [delay]="toast.delay || 5000"
//                (hidden)="_displayService.hideToast(toast)">
//       <ng-template>
//       </ng-template>
//     </ngb-toast>
//   `,
//   host: {'class': 'toast-container position-fixed end-0 p-3', 'style': 'z-index: 12000; top: 65px'}
// })
// export class ToastsComponent {
//   constructor(public _displayService: DisplayService) {
//   }
//
//   isTemplate(toast: any) {
//     return toast.textOrTpl instanceof TemplateRef;
//   }
// }
