import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'org-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() label = 'Click';
  @Input() padding = 10;
  @Input() disabled = true;
  @Output() action = new EventEmitter<void>();

  constructor() {}

  public handleClick() {
    this.action.next();
  }
}
