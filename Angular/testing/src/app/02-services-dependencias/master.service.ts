import { Injectable } from '@angular/core';
import { ValueService } from '../01-services/value.service';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor( private valueService: ValueService) { }

  getValue() {
    console.log("this.valueService.getValue()", this.valueService.getValue());
    return this.valueService.getValue();
  }
}
