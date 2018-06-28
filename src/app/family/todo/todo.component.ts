import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  task=["reading","singing","painting","Dancing"];
  oneTask="";
  money=60;
  scores=[5,9,11,80,1,-3,45]
  fruits=["apple","coconut","orange","mango"]
  myDate= new Date();
  addTask=function(){
    console.log("addTask function called");
    this.task.push(this.oneTask);
    this.oneTask="";
   
  }

  removeTask=function(received){
    console.log("Remove Task");
    this.task.splice(received,1)
  }

  constructor() { }

  ngOnInit() {
  }

}
