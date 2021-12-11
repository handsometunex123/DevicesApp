import { fadeInOut, slideUpDown } from 'src/app/animation/triggers';
import { LoaderService } from './../../services/loader/loader.service';
import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DevicesService } from 'src/app/services/devices/devices.service';
import { Device } from 'src/app/models/device.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevicesComponent implements OnInit {
  constructor(
    public deviceService: DevicesService,
    public loader: LoaderService
  ) {}

  /**
   * This observable combines the search input stream with the devices stream thereby
   * rendering filter sensitive stream to the view
   */
  deviceWithSearchAction$: Observable<Device[]> =
    this.deviceService.deviceWithSearchAction$.pipe(
      tap(() => this.loader.stop())
    );

  ngOnInit(): void {
    /**
     * The loader starts on init of the page and stops immediately data has been rendered
     * to the view
     */
    this.loader.start();
  }
}
