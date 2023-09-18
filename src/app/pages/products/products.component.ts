import { Component, inject } from '@angular/core';
import { ProductComponent } from 'src/app/components/product/product.component';
import { Product } from './../../models/product.model';
import { HttpClient } from '@angular/common/http'


@Component({
  standalone:true,
  imports:[ProductComponent],
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  http = inject(HttpClient);
  products: Product[] = [];

  ngOnInit(){
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe((data)=>{
      this.products = data;
    });
  }
}
