import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class localserviceService {

  sweets=['rasogolla','gulabjamun','kajukatli','jalebi']

  constructor() { }

  getLocalSweets(){
    return "These are famous local sweets of Kolkata"
  }
}
