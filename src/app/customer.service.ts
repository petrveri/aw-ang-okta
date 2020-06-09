import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { Customer } from './customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customersPath = '/api/saleslt/customers';  // Path to web api'

  constructor(
    private appService: AppService) { }

  getCustomers(): Observable<Customer[]> {
    return this.appService.getListHttp<Customer>('getCustomers', this.customersPath, []);
  }
}
