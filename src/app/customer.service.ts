import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { Customer } from './customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private protocol = 'http://';
  private resourceHost = '192.168.56.1';
  private resourceHostPort = this.resourceHost + ':8080';
  private customersPath = '/api/saleslt/customers';  // Path to web api'

  constructor(
    private appService: AppService) { }

  getCustomers(): Observable<Customer[]> {
    let customersUrl = this.protocol + this.resourceHostPort + this.customersPath;
    return this.appService.getListHttp<Customer>('getCustomers', customersUrl, []);
  }

  setCustomerResourceHostPort(resourceHostPort) {
    this.resourceHostPort = resourceHostPort;
  }
  getCustomerResourceHostPort() {
    return this.resourceHostPort;
  }
}
