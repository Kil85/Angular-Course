import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  selected: string = 'recipes';

  handleSelection(data: string) {
    this.selected = data;
  }
}
