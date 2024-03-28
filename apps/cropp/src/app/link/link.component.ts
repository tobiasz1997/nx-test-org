import { Component, Input } from '@angular/core';

@Component({
  selector: 'cropp-link',
  standalone: true,
  imports: [],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent {
  @Input() href = '/'
  @Input({required: true}) label = '';
}
