import { Component, OnInit } from '@angular/core';
import { Products } from '../../models/Products';
import { HttpClient } from '@angular/common/http';
import { ProductListService } from '../../services/product-list.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  products: Products[] = [];

  constructor(private productListService: ProductListService){}

  ngOnInit(): void{
    this.productListService.getProducts().subscribe(data => {
      console.log(data);
      this.products = data;
    })
  }
}
