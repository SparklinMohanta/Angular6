import { Component, OnInit } from '@angular/core';
import { RemoteserviceService } from '../../myservices/remoteservice.service';
import{ HttpClient, HttpErrorResponse } from "@angular/common/http";
import { UserInfo } from "../../interface/user-info"
import { Observable } from 'rxjs';
@Component({
  selector: 'cts-consume-remote-service',
  templateUrl: './consume-remote-service.component.html',
  styleUrls: ['./consume-remote-service.component.css']
})
export class ConsumeRemoteServiceComponent implements OnInit {

  userinfo:UserInfo[];
  observableUserInfo:Observable<UserInfo[]>

  constructor(private remoteservice:RemoteserviceService) {
    //console.log(remoteservice.getRemoteData());
   }

  ngOnInit() {
    this.getRemoteData()
  }

  getRemoteData(){
    console.log("Remote Data");
    this.observableUserInfo=this.remoteservice.getRemoteData();
    this.observableUserInfo.subscribe(
      userinfo=>{
        this.userinfo=userinfo;
        console.log(this.userinfo);
       },
       (err:HttpErrorResponse)=>{
         if(err.error instanceof Error){
           console.log('Server-side error')
         }else{
           console.log('Client side Error')
         }
       }
     )
    // this.observableUserInfo.subscribe(
    //   function(userinfo){
    //     this.userinfo=userinfo;
    //     console.log(this.userinfo);

    //   }
    // )
    console.log("---------------------");
  }

}
