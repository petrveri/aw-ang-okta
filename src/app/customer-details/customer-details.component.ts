import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service'
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-details',
  providers: [AppService],
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

    public customer = new Customer(1,'sample customer');
    private customersUrl = 'http://localhost:8081/resource-server/api/customers/';

    constructor(private _service:AppService) {}

    getCustomer(){
        this._service.getResource(this.customersUrl+this.customer.customerID)
         .subscribe(
                     data => this.customer = data,
                     error =>  this.customer.firstName = 'Error');
    }
    addCustomer(newCustomerName: string){
        if (newCustomerName) {
            this._service.getResource(this.customersUrl+newCustomerName)
             .subscribe(
                         data => this.customer = data,
                         error =>  this.customer.firstName = 'Error');
        }
    }

  ngOnInit(): void {
  }

}
