import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { RedDirective } from '../../../directives/red.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbar,RedDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
