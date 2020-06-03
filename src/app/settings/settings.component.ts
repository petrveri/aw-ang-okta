import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public customerResourceHostPort: string;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerResourceHostPort = this.customerService.getCustomerResourceHostPort();
  }

  setCustomerResourceHostPort(customerResourceHostPort) {
    this.customerResourceHostPort = customerResourceHostPort;
    this.customerService.setCustomerResourceHostPort(customerResourceHostPort);
  }
}
