import { Component, Input, Signal } from '@angular/core';
import { InsightsComponent } from '../Insights/insights.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [InsightsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

} 
