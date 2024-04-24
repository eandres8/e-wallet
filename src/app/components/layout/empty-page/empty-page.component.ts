import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'empty-page',
  standalone: true,
  imports: [
    RouterModule,
  ],
  templateUrl: './empty-page.component.html',
  styleUrl: './empty-page.component.scss'
})
export class EmptyPageComponent {
  @Input() text: string = '';
  @Input() textLink: string = '';
  @Input() path: string = '';
}
