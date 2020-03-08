import { Component, OnInit, Input } from '@angular/core';
import { IActivity } from './activity.model';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  @Input() activity: IActivity;
  constructor() { }

  ngOnInit() {
  }
}
