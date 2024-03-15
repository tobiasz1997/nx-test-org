import { Component, Input } from '@angular/core';

@Component({
  selector: 'cropp-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) description: string = '';
}
