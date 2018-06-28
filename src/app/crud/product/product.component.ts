import { Component, OnInit } from '@angular/core';
import { Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'cts-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http:HttpClient) { }

  confirmationString:string="New product has been added";
  isAdded: boolean=false;
  productObj:object=[];
  
  addNewProduct=function(product){
    this.productObj={
      "name":product.name,
      "color":product.color,
    }
    this.http.post("http://localhost:5555/products/",this.productObj).subscribe((res:Response)=>{
      //console.log(res);
      this.isAdded =true;
    })
  }

  ngOnInit() {
  }

}
