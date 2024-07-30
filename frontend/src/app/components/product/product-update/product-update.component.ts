import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input'
import { FormsModule } from '@angular/forms';
import { Product } from '../product.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  FormsModule,
  MatButtonModule],
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent implements OnInit{

  product!: Product;

  constructor(
    private productService:ProductService, 
    private router: Router, 
    private route: ActivatedRoute){}
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id!).subscribe(product =>{
      this.product = product
    });
  }
  
  updateProduct():void{
    this.productService.update(this.product).subscribe(()=>{
      this.productService.showMessage('Produto atualizado com sucesso')
      this.router.navigate(['/products'])
    })
  }

  cancel():void{
    this.router.navigate(['/products'])
  }
}
