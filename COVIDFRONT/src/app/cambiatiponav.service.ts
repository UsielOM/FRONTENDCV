import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CambiatiponavService {
@Output() cambiatipos: EventEmitter<number> = new EventEmitter();
  constructor() { }
}
