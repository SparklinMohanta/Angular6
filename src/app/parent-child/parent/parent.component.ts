import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  myName="Angular 5.x"
  constructor() { }

  ngOnInit() {
  }
  recievedFromChild=function(e){
    console.log(e)
    this.myName=e
  }
}
