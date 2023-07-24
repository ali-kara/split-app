import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription, fromEvent, map, merge, of } from 'rxjs';
import { BaseService } from 'src/app/api/BaseService';

@Component({
  selector: 'app-no-internet-screen',
  template: '<div *ngIf="networkStatus == false" class="myborder"></div>',
  styles: [
    '.myborder { position: fixed;top: 0;left: 0;border: 11px solid red;width: 100%;height: 100%;margin: 0;padding: 0;box-sizing: border-box;}',
  ],
})
export class NoInternetScreenComponent extends BaseService {}
