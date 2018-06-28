import { Component, OnInit } from '@angular/core';
import{trigger,state, transition,animate,style} from "@angular/animations"

@Component({
  selector: 'cts-basic-animation',
  templateUrl: './basic-animation.component.html',
  styleUrls: ['./basic-animation.component.css'],
  animations:[
    trigger("growUpAnimation",[
      state("kid",style(
        {
          color:'blue',
          transform:'scale(3)'

        }
      )),
      state("adult",style(
        {
          color:'Red',
          transform:'scale(2)'
        }
      )),
      transition('kid <=> adult',animate('1000ms ease-in'))
    ])
  ]
})
export class BasicAnimationComponent implements OnInit {

  defaultState:String='adult'

  animateNow= function(){
    
    this.defaultState=this.defaultState=='adult'?'kid':'adult'
    console.log(this.defaultState)
  }
  constructor() { }

  ngOnInit() {
  }

}
