import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiColumnTableComponent } from './multi-column-table/multi-column-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MultiColumnTableComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'multi-column-grouping-app';
}
