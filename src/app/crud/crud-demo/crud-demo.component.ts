import { Component, OnInit } from '@angular/core';
import { Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'cts-crud-demo',
  templateUrl: './crud-demo.component.html',
  styleUrls: ['./crud-demo.component.css']
})
export class CrudDemoComponent implements OnInit {

  constructor(private http:HttpClient) { }

    id:number;  
    private headers = new Headers({ 'Content-Type':'application/json'})

    products=[];
    fetchData=function(){
        this.http.get("http://localhost:5555/products").subscribe(
          (res:Response)=>{
            this.products=res;
          }
        )
   }

   deleteProduct=function(id){
     if(confirm("Are you Sure?")){
       const url = `${"http://localhost:5555/products"}/${id}`;
       return this.http.delete(url, {headers:this.headers}).toPromise().then(() =>{
         this.fetchData();
       })
     }
   }

  ngOnInit() {
    this.fetchData();
  }

}
