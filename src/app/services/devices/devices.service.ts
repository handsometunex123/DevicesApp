import { LoaderService } from './../loader/loader.service';
import { SearchBarService } from './../searchbar/search-bar.service';
import {
  BehaviorSubject,
  combineLatest,
  Observable,
  of,
  Subject,
  throwError,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Device } from 'src/app/models/device.model';
import {
  catchError,
  filter,
  finalize,
  map,
  shareReplay,
  startWith,
  switchMap,
  tap,
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DevicesService {
  private devicesUrl = 'api/devices';

  private selectedDeviceIDSubject = new BehaviorSubject<number>(0);
  public selectedDeviceAction$ = this.selectedDeviceIDSubject.asObservable();

  constructor(
    private http: HttpClient,
    private searchBarService: SearchBarService,
    private loader: LoaderService
  ) {}

  /**
   * This stores the devices stream from the inMemoryWebAPI
   * shareReplay(1) is applied so that last stream is replayed to late subscribers
   */
  devices$: Observable<Device[]> = this.http
    .get<Device[]>(this.devicesUrl)
    .pipe(catchError(err => this.handleError(err)))
    .pipe(shareReplay(1));

  /**
   * combines the devices stream the userInput stream
   * @returns Observable of the filtered device
   * method implements combine latest which continues to trigger as soon as any
   * change is detected from either device observable or userInput observable
   */

  deviceWithSearchAction$: Observable<Device[]> = combineLatest([
    this.devices$,
    this.searchBarService.userInputAction,
  ])
    .pipe(
      //switchMap helps to automatically unsubscribe from the old observable response from input param supplied and subscribe 
      // to the new one immediately
      switchMap(([devices, inputedDeviceName]) => {
        const returnedDevices = of(
          devices.filter((device) =>
            device.name
              .toLocaleLowerCase()
              .includes(inputedDeviceName.toLocaleLowerCase())
          )
        );
        tap(() => this.loader.stop());
        return returnedDevices;
      }),
      tap((product) => console.log('searchedDevice', product)),
      catchError((err) => this.handleError(err)),
      finalize(() => this.loader.stop())
    )
    .pipe(shareReplay(1));

  /**
   * returns the currently selected device based on the ID.
   * the observable emits anytime the devices or the the ID of the selected device updates.
   */

  selectedDevice$: Observable<Device> = combineLatest([
    this.devices$,
    this.selectedDeviceAction$,
  ])
    .pipe(
      //this prevents the selectedDevice$ observable from emmiting untill the filter condition is satisfied.
      filter(
        ([devices, selectedDeviceId]) =>
          Boolean(selectedDeviceId) && Boolean(devices)
      ),
      switchMap(([devices, selectedDeviceId]) => {
        const selectedDevice = of(
          devices?.find((device) => device.id === selectedDeviceId) ||
            ({} as Device)
        );
        tap(() => this.loader.stop());
        return selectedDevice;
      }),
      catchError((err) => this.handleError(err)),
      tap((product) => console.log('selectedProduct', product))
    )
    .pipe(shareReplay(1));

  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

  /**
   *
   * @param deviceId This is the ID of the currently selected Device
   * @returns void
   * method updates the currently the selectedIDSubject with the currently selected ID
   */
  updateSelectedDeviceID = (deviceId: number): void =>
    this.selectedDeviceIDSubject.next(deviceId);
}
