import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentsTableComponent } from "./students-table/students-table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentsTableComponent, StudentsTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'students-entry';
}
