import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-empty-section-template',
  templateUrl: './empty-section-template.component.html',
  styleUrls: ['./empty-section-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptySectionTemplateComponent implements OnInit {

  @Input() actionText = 'Refresh';
  @Input() infoText = 'Use the refresh button to try again or adjust your filter parameter';
  @Input() widthClass = ' w-4/12';

  @Output() actionEvent: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.actionEvent.emit();
  }

}
