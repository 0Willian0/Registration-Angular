import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import { ProductService } from '../product.service';
import { Router } from '@angular/router'
import { Product } from '../product.model';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input'

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [MatButtonModule,
    MatButtonModule, 
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent implements OnInit{
  
  product: Product ={
    name:'',
    price: 0
  }

  constructor(private productService: ProductService, private router: Router){}
  

  ngOnInit(): void {
  }

  createProduct(): void{
    this.productService.create(this.product).subscribe(()=>{
      this.productService.showMessage('Produto Criado')
      this.router.navigate(['/products'])
    })
    
  }

  cancel():void{
    this.router.navigate(['/products'])

  }
}
