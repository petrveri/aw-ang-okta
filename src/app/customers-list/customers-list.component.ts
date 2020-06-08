import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { AddressService } from '../address.service';
import { Address } from '../address';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers: Customer[];
  selectedCustomer: Customer;
  customerAddresses: Address[];

  constructor(private customerService: CustomerService, private addressService: AddressService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  onSelect(customer: Customer): void {
    this.customerAddresses = undefined;
    this.selectedCustomer = customer;
    this.getCustomerAddresses(customer.customerID);
  }

  getCustomers(): void {
    this.customerService.getCustomers()
      .subscribe(customers => this.customers = customers);
  }

  getCustomerAddresses(customerID): void {
    this.addressService.getCustomerAddresses(customerID)
      .subscribe(customerAddresses => this.customerAddresses = customerAddresses);
  }
}
