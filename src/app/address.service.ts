import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { Address } from './address';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private protocol = 'http://';
  private resourceHost = '192.168.56.1';
  private resourceHostPort = this.resourceHost + ':8080';
  private customerAddressesPathPart1 = '/api/saleslt/customers/';
  private customerAddressesPathPart2 = '/addresses?nativeQuery=true';

  constructor(
    private appService: AppService) { }

  getCustomerAddresses(customerID): Observable<Address[]> {
    let customerAddressesUrl = this.protocol + this.resourceHostPort + this.customerAddressesPathPart1
      + customerID + this.customerAddressesPathPart2;
    return this.appService.getListHttp<Address>('getCustomerAddresses', customerAddressesUrl, []);
  }

  setResourceHostPort(resourceHostPort) {
    this.resourceHostPort = resourceHostPort;
  }
  getResourceHostPort() {
    return this.resourceHostPort;
  }
}
