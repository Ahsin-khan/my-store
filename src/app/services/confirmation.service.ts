import { Injectable } from '@angular/core';
import { OrderConfirmation } from '../models/Products';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {

  private orderConfirmed: BehaviorSubject<OrderConfirmation> = new BehaviorSubject<OrderConfirmation>({
    id: 0,
    name: '',
    price: 0,
  });
  constructor() {}

  confirmation(order: OrderConfirmation): void {
    this.orderConfirmed.next(order)
  }

  getConfirmation(): Observable<OrderConfirmation>{
    return this.orderConfirmed.asObservable();
  }
}
