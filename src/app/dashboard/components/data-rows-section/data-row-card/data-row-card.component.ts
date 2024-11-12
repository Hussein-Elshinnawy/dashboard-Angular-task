import { Component } from '@angular/core';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-data-row-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './data-row-card.component.html',
  styleUrl: './data-row-card.component.css'
})
export class DataRowCardComponent {
  ellipsis=faEllipsis;
}
