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
  selector: 'app-product-delete',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ],
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css'
})
export class ProductDeleteComponent implements OnInit{
  product!: Product

  constructor( private productService:ProductService, 
    private router: Router, 
    private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id!).subscribe(product =>{
      this.product = product
    })
  }

  deleteProduct():void{
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.delete(id!).subscribe(()=>{
      this.productService.showMessage('Produto Deletado com sucesso')
      this.router.navigate(['/products'])
    })
  }

  cancel():void{
    this.router.navigate(['/products'])
  }
}
