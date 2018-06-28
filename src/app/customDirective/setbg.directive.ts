import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ctsSetbg]'
})
export class SetbgDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.color='white'
    el.nativeElement.style.backgroundColor='purple'
   }

}
