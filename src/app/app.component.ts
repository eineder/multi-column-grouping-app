import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MultiColumnTableComponent,
  TableColumn,
} from './multi-column-table/multi-column-table.component';
// import { MasterDetailComponent } from './master-detail/master-detail.component';
import { FormsModule } from '@angular/forms';
import { MultiSelect, MultiSelectModule } from 'primeng/multiselect';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MultiColumnTableComponent,
    FormsModule,
    MultiSelectModule,
    ButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('nameBodyTemplate', { static: true })
  nameBodyTemplate!: TemplateRef<any>;

  @ViewChild('nameHeaderTemplate', { static: true })
  nameHeaderTemplate!: TemplateRef<any>;

  title = 'multi-column-grouping-app';
  customers: any[] = [];
  groupingFields: string[] = ['country', 'status'];
  columns: TableColumn[] = [];
  groupingColumns: { field: string; name: string }[] = [];
  public get availableColumns() {
    return this.columns.map((c) => {
      return {
        field: c.field,
        header: c.name,
      };
    });
  }

  ngOnInit() {
    this.columns = [
      {
        field: 'name',
        name: 'Name',
        headerTemplate: this.nameHeaderTemplate,
        bodyTemplate: this.nameBodyTemplate,
      },
      { field: 'representative', name: 'Representative' },
      { field: 'country', name: 'Country' },
      { field: 'company', name: 'Company' },
      { field: 'status', name: 'Status' },
      { field: 'date', name: 'Date' },
    ];

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

  onApplyGroupingClick(event: any) {
    this.groupingFields = this.groupingColumns.map((c) => c.field);
    console.log('Apply grouping: ', this.groupingFields);
  }
}
