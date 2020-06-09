import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { Address } from './address';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private customerAddressesPathPart1 = '/api/saleslt/customers/';
  private customerAddressesPathPart2 = '/addresses?nativeQuery=true';

  constructor(
    private appService: AppService) { }

  getCustomerAddresses(customerID): Observable<Address[]> {
    let customerAddressesPath = this.customerAddressesPathPart1 + customerID + this.customerAddressesPathPart2;
    return this.appService.getListHttp<Address>('getCustomerAddresses', customerAddressesPath, []);
  }
}
