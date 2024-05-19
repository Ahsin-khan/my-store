import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Products } from '../models/Products';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Products[]>{
    return this.httpClient.get<Products[]>("assets/data.json");
  }

  getProductById(id: number): Observable<Products | undefined> {
    return this.getProducts().pipe(
      map(products => products.find(product => product.id === id))
    );
  }
}
