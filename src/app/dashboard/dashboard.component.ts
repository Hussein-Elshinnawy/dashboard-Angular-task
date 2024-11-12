import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SideNavBarComponent } from './components/side-nav-bar/side-nav-bar.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faChartSimple, faPause, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { DataRowsSectionComponent } from './components/data-rows-section/data-rows-section.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent,FontAwesomeModule ,SideNavBarComponent, DataRowsSectionComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  chartBar=faChartSimple;
  listIcon=faPause;
  downIcon=faCaretDown;
  upIcon=faCaretUp;
}
