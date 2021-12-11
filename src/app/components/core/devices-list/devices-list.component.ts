import { LoaderService } from './../../../services/loader/loader.service';
import { Component, Input, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.scss'],
})
export class DevicesListComponent implements OnInit {

  //the devicesList is passed in as an input from any component using it
  @Input() devicesList!: Device[];

  //the showInfoButton flag is set to true by default unless defined otherwise by the component using it
  @Input() showInfoButton: boolean = true;
  
  constructor(public loader: LoaderService, private router: Router) {}

  ngOnInit(): void {}


  /**
   * 
   * @param deviceId the ID of the clicked device
   * method routes user to the devide detail page.
   */
  routeToNextPage = (deviceId: number): void => {
    this.router.navigate(['/portal/devices/' + deviceId]);
  };
}
