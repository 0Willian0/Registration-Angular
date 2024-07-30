import { Component, OnInit} from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { MatTableModule, MatTable } from '@angular/material/table';
import { CurrencyPipe } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';

import localePt from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt)

@Component({
  selector: 'app-product-read',
  standalone: true,
  imports: [RouterModule,MatTableModule,MatTable,CurrencyPipe],
  providers:[{
    provide:LOCALE_ID,
    useValue: 'pt-BR'
  }],
  templateUrl: './product-read.component.html',
  styleUrl: './product-read.component.css'
})
export class ProductReadComponent implements OnInit{

    products: Product[] = []
    displayedColumns = ['id', 'name', 'price', 'action']

    constructor(private productSevice:ProductService){

    }

    ngOnInit():void{
      this.productSevice.read().subscribe(products =>{
        this.products = products
        console.log(products)
      })
    }
}
