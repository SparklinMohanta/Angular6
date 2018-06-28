import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {
  submitUserHobby=function(user){
     console.log("Submit Called");
     console.log(user);
   }

  constructor() { }

  ngOnInit() {
  }

}
