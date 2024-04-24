import { Component } from '@angular/core';

import { EmptyPageComponent, TopNavbarComponent } from '@app/components/layout';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    TopNavbarComponent,
    EmptyPageComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
