import { Component, Input, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device.model';

@Component({
  selector: 'app-device-item',
  templateUrl: './device-item.component.html',
  styleUrls: ['./device-item.component.scss'],
})
export class DeviceItemComponent implements OnInit {

  //Each rendered item passed in as an input
  @Input() deviceItem!: Device;

  //Determines if the info button should be shown
  @Input() showInfoButton!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
