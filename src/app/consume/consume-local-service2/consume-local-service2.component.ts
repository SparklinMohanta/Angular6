import { Component, OnInit } from '@angular/core';
import {localserviceService } from '../../myservices/localservice.service'
@Component({
  selector: 'cts-consume-local-service2',
  templateUrl: './consume-local-service2.component.html',
  styleUrls: ['./consume-local-service2.component.css']
})
export class ConsumeLocalService2Component implements OnInit {

  constructor(private localservice:localserviceService) {
    console.log("Local Sweets from ConsumeLocalService2Component");
    console.log(localservice.sweets);
   }

  ngOnInit() {
  }

}
