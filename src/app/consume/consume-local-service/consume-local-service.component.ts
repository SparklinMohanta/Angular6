import { Component, OnInit } from '@angular/core';
import {localserviceService } from '../../myservices/localservice.service'
@Component({
  selector: 'cts-consume-local-service',
  templateUrl: './consume-local-service.component.html',
  styleUrls: ['./consume-local-service.component.css']
})
export class ConsumeLocalServiceComponent implements OnInit {

  constructor(private localservice:localserviceService) {
    console.log(localservice.getLocalSweets());
    console.log(localservice.sweets);
    localservice.sweets.push('emerti');
    console.log(localservice.sweets);
   }

  ngOnInit() {
  }

}
