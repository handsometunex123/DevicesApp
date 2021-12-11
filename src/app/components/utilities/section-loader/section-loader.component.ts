import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-section-loader',
  templateUrl: './section-loader.component.html',
  styleUrls: ['./section-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionLoaderComponent implements OnInit {
@Input() loaderText = 'Loading..';
@Input() isOverlay = false;

@Input() notSectionLoader = false;

  constructor() { }

  ngOnInit(): void {
  }

}
