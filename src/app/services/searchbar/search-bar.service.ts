import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchBarService {
  // this houses the current state of the userSearch input
  private userInputSubject = new BehaviorSubject<string>('');

  // called the .asObservable() to sort of make the behaviourSubject an observable
  // subscribe to this action to get the current state of user search input
  public userInputAction = this.userInputSubject.asObservable();
  constructor() {}

  /**
   * This method update the state of the searchInputSubject that takes in the search Input specified by the user
   * @param deviceName of type string is the device name typed in by the user
   * @returns void
   */
  updateSearchInput = (inputtedDeviceName: string): void => {
    this.userInputSubject.next(inputtedDeviceName);
  };
}
