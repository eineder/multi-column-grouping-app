import { NgFor, NgIf, NgStyle, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

export interface TableColumn {
  field: string;
  header: string | TemplateRef<any>;
  bodyTemplate?: TemplateRef<any>;
}

@Component({
  selector: 'app-multi-column-table',
  templateUrl: './multi-column-table.component.html',
  styleUrls: ['./multi-column-table.component.css'],
  standalone: true,
  imports: [TableModule, NgIf, ButtonModule, NgFor, NgTemplateOutlet, NgStyle],
})
export class MultiColumnTableComponent implements OnInit {
  @Input({ required: true }) value: any[] = [];
  @Input() groupingFields: string[] = [];
  @Input({ required: true }) columns: TableColumn[] = [];

  groupedData: any[] = [];
  expandedState: { [key: string]: boolean } = {};
  getGroupRowStyle(level: number): any {
    const padding = level * 2;
    return { 'padding-left': `${padding}rem` };
  }

  ngOnInit() {
    this.groupedData = this.groupData(this.value, this.groupingFields);
  }

  isTemplate(header: string | TemplateRef<any>) {
    return typeof header !== 'string';
  }

  getTemplate(header: any): TemplateRef<any> {
    return header as TemplateRef<any>;
  }

  getColumnHeader(field: string): string {
    return this.columns.find((c) => c.field === field)?.header as string;
  }

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
      field: fields[level],
      level,
      children: this.groupData(grouped[key], fields, level + 1),
    }));
  }

  toggleExpand(key: string) {
    this.expandedState[key] = !this.expandedState[key];
  }

  isExpanded(key: string): boolean {
    return this.expandedState[key] || false;
  }
}
