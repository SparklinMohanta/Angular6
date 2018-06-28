import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { UserInfo } from '../interface/user-info';

@Injectable({
  providedIn: 'root'
})
export class RemoteserviceService {

  constructor(private httpclient:HttpClient) { }

  getRemoteData():Observable<UserInfo[]>{
    return this.httpclient.get<UserInfo[]>("https://jsonplaceholder.typicode.com/users");
  }
}
