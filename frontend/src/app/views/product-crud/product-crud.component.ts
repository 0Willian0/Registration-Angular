import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {Router} from '@angular/router'
import { ProductReadComponent } from '../../components/product/product-read/product-read.component';


@Component({
  selector: 'app-product-crud',
  standalone: true,
  imports: [MatButtonModule, ProductReadComponent],
  templateUrl: './product-crud.component.html',
  styleUrl: './product-crud.component.css'
})
export class ProductCrudComponent {
  constructor(private router: Router){

  }
  navigateToProductCreate(): void{
    this.router.navigate(['products/create'])
  }
}
