import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cts-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() myName
  @Output() parcelToParent = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  sendToParentNow=function(recieved){
    console.log("Child Calling Parent")
    this.parcelToParent.emit(recieved);
  }
}
