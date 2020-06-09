import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public resourceHostPort: string;
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.resourceHostPort = this.appService.getResourceHostPort();
  }

  setResourceHostPort(resourceHostPort) {
    this.resourceHostPort = resourceHostPort;
    this.appService.setResourceHostPort(resourceHostPort);
  }
}
