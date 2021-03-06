import { Component, OnInit } from '@angular/core';
import { Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute} from '@angular/router';
import { Router} from '@angular/router';

@Component({
  selector: 'cts-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id:number;
  data:object = {};
  products =[];
  productObj:object = {};
  private headers = new Headers({ 'Content-Type':'application/json'})

  constructor(private router:Router, private route: ActivatedRoute, private http:HttpClient) { }

  updateProduct(product){
    this.productObj={
      "name":product.name,
      "color":product.color
    };
    const url = `${"http://localhost:5555/products"}/${this.id}`;
    // this.http.put(url, JSON.stringify(this.productObj), {headers: this.headers})
    // .toPromise()
    // .then(() =>{
    //   this.router.navigate(['/']);
    // })
    this.http.put(url, this.data).subscribe(()=>{
      this.router.navigate(['/crud']);
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.id =+params['id'];
    });
    this.http.get("http://localhost:5555/products").subscribe(
          (res:any)=>{
            this.products=res;
            for(var i=0;i<this.products.length;i++){
              if(parseInt(this.products[i].id)===this.id){
                  this.data=this.products[i];
                  break;
              }

            }
          }
        )
  }

}
