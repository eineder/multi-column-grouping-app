import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiColumnTableComponent } from './multi-column-table/multi-column-table.component';
import { MasterDetailComponent } from './master-detail/master-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MultiColumnTableComponent, MasterDetailComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'multi-column-grouping-app';
  customers: any[] = [];
  groupingFields: string[] = ['country', 'status'];

  ngOnInit() {
    this.customers = [
      {
        name: 'John',
        country: 'USA',
        company: 'Apple',
        status: 'Active',
        date: '2023-10-10',
        representative: 'Alice',
      },
      {
        name: 'Jane',
        country: 'USA',
        company: 'Microsoft',
        status: 'Inactive',
        date: '2023-10-12',
        representative: 'Alice',
      },
      {
        name: 'Tom',
        country: 'Canada',
        company: 'Amazon',
        status: 'Active',
        date: '2023-11-01',
        representative: 'Bob',
      },
      // Add more data...
    ];
  }
}
