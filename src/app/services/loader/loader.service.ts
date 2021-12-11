import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loaderSubject = new BehaviorSubject<boolean>(false);
  public loaderAction$ = this.loaderSubject.asObservable();

  private detailsLoaderSubject = new BehaviorSubject<boolean>(false);
  public detailsLoaderAction$ = this.detailsLoaderSubject.asObservable();

  constructor() {}


  /**
   * method starts the loader
   */
  public start = (): void => {
    this.loaderSubject.next(true);
  };

  /**
   * method stops the loader
   */
  public stop = (): void => {
    this.loaderSubject.next(false);
  };

  public updateDetailsLoader(status: boolean): void{
     this.detailsLoaderSubject.next(status);
  }


}
