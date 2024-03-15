import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from 'libs/ui/src';

@Component({
  standalone: true,
  imports: [RouterModule, UiModule],
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'test-nx-app';
  isTrue = false;

  get getMessage(): string {
    return this.isTrue ? 'Prawda' : 'Fałsz';
  }

  handleClick(): void {
    this.isTrue = !this.isTrue;
  }
}
