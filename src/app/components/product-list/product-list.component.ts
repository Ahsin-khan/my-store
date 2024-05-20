import { Component, OnInit } from '@angular/core';
import { Products, ProductsInCart } from '../../models/Products';
import { CartService } from '../../services/cart.service';
import { HttpClient } from '@angular/common/http';
import { ProductListService } from '../../services/product-list.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  products: Products[] = [];

  constructor(
    private productListService: ProductListService,
    private cartService: CartService
  ){}

  ngOnInit(): void{
    this.productListService.getProducts().subscribe(data => {
      console.log(data);
      this.products = data;
    })
  }


  addToCart(product: ProductsInCart) {
    this.cartService.addToCart(product);
  }
}
