import { Component } from '@angular/core';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import { DataRowCardComponent } from './data-row-card/data-row-card.component';
@Component({
  selector: 'app-data-rows-section',
  standalone: true,
  imports: [FontAwesomeModule, DataRowCardComponent],
  templateUrl: './data-rows-section.component.html',
  styleUrl: './data-rows-section.component.css'
})
export class DataRowsSectionComponent {
 ellipsis=faEllipsis;
}
