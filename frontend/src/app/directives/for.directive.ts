import { Directive } from '@angular/core';

@Directive({
  selector: '[appFor]',
  standalone: true
})
export class ForDirective {

  constructor() { }

}
