import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-insights',
  standalone: true,
  imports: [],
  templateUrl: './insights.component.html',
  styleUrl: './insights.component.css'
})
export class InsightsComponent {  
    @Input() message = 'hello steven!';
}
