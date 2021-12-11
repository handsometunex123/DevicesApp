import { SearchBarService } from './../../../services/searchbar/search-bar.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { fadeInOut } from 'src/app/animation/triggers';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  animations: [fadeInOut],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  public searchInput = new FormControl('');
  private subscription!: Subscription;

  constructor(private searchService: SearchBarService) {
    this.updateUserInput();
  }

  ngOnInit(): void {}

  /**
   * method updates the userInput subject every 8ms
   */
  updateUserInput = (): void => {
    this.subscription = this.searchInput.valueChanges
      .pipe(debounceTime(800))
      .subscribe((userInput) => {
        this.searchService.updateSearchInput(userInput);
        console.log(userInput);
      });
  };

  //checks if user has started typing in value into the search form control
  get textInputStarted(): boolean {
    return this.searchInput.value?.length > 0;
  }

  /**
   * method is triggered on click of the cancel button
   * The method then sets the searchinput formControl back to empty which resets the search back
   * to it default state
   *
   **/
  clearSearch = (): void => {
    this.searchInput.setValue('');
  };

  ngOnDestroy(): void {
    //unsubsribed from the subscription to avoid memory leaks.
    this.subscription.unsubscribe();
  }
}
