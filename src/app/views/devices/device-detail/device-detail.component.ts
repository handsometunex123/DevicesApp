import { LoaderService } from './../../../services/loader/loader.service';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DevicesService } from 'src/app/services/devices/devices.service';
import { takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss'],
})
export class DeviceDetailComponent implements OnInit, OnDestroy {
  constructor(
    private activatedRoute: ActivatedRoute,
    private deviceService: DevicesService,
    public loader: LoaderService,
    private router: Router
  ) {}

  private endStreamSubject = new Subject();

  /**
   * This emits currently selected device found within the devices stream
   * This observable is subsribed to using the async pipe on the view to
   * display the details of the currently selected device
   */
  currentDevice$ = this.deviceService.selectedDevice$.pipe(
    tap(() => this.loader.updateDetailsLoader(false))
  );

  ngOnInit(): void {
    this.getCurrentlySelectedFromRoute();
  }
  /**
   * @returns void
   * gets the current device id from the route then updates the slectedID observable to
   * retrieve the details of the current device based on the ID.
   */
  getCurrentlySelectedFromRoute = (): void => {
    this.activatedRoute.paramMap
      .pipe(takeUntil(this.endStreamSubject))
      .subscribe((param) => {
        const currentDeviceId = param.get('id') ?? '';
        this.checkIfRouteParamIsNaN(+currentDeviceId);
        // the currently ID from route is passed the current ID subject;
        this.deviceService.updateSelectedDeviceID(+currentDeviceId);
        // the loader starts immediately after the ID has been updated.
        this.loader.updateDetailsLoader(true);
      });
  };

  ngOnDestroy(): void {
    /**
     * This stops the paramMap observable from continuous emmision.
     * Emits on when the onDestroy hook is triggered automaically stop the paramMap emission above
     */
    this.endStreamSubject.next();
  }


  /**
   * 
   * @param currentDeviceId the currentDevice ID
   * method check if the routeParam is Not a number and routes the user to the devices page.
   */
  checkIfRouteParamIsNaN = (currentDeviceId: number): void => {
    if (isNaN(+currentDeviceId)) {
      this.router.navigate(['/portal']);
    }
  };
}
