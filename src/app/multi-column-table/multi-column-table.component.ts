import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-multi-column-table',
  templateUrl: './multi-column-table.component.html',
  styleUrls: ['./multi-column-table.component.css'],
  standalone: true,
  imports: [TableModule, NgIf, ButtonModule, NgFor, NgTemplateOutlet],
})
export class MultiColumnTableComponent implements OnInit {
  customers: any[] = []; // Original flat data
  groupedData: any[] = []; // Hierarchical grouped data
  groupingFields: string[] = ['representative', 'country']; // Fields to group by

  expandedState: { [key: string]: boolean } = {}; // Tracks expanded rows

  ngOnInit() {
    // Replace this with your data fetching logic
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

    this.groupedData = this.groupData(this.customers, this.groupingFields);
  }

  /**
   * Groups the data recursively based on the provided fields.
   */
  groupData(data: any[], fields: string[], level = 0): any[] {
    if (level >= fields.length) return data;

    const grouped = data.reduce((acc, item) => {
      const groupKey = item[fields[level]];
      if (!acc[groupKey]) acc[groupKey] = [];
      acc[groupKey].push(item);
      return acc;
    }, {});

    return Object.keys(grouped).map((key) => ({
      key,
      children: this.groupData(grouped[key], fields, level + 1),
    }));
  }

  /**
   * Toggles the expanded state for a given key.
   */
  toggleExpand(key: string) {
    this.expandedState[key] = !this.expandedState[key];
  }

  /**
   * Checks if a group is expanded.
   */
  isExpanded(key: string): boolean {
    return this.expandedState[key] || false;
  }
}
