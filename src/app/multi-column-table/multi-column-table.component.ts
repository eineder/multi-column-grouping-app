import { CheckboxModule } from 'primeng/checkbox';
import {
  CommonModule,
  NgFor,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
} from '@angular/common';
import {
  Component,
  OnInit,
  Input,
  TemplateRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { TableCheckbox, TableModule } from 'primeng/table';

export class TableColumn {
  constructor(public field: string, public name: string) {}
  headerTemplate?: TemplateRef<any>;
  bodyTemplate?: TemplateRef<any>;
}

@Component({
  selector: 'app-multi-column-table',
  templateUrl: './multi-column-table.component.html',
  styleUrls: ['./multi-column-table.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    NgIf,
    ButtonModule,
    NgFor,
    NgTemplateOutlet,
    NgStyle,
    CheckboxModule,
    FormsModule,
  ],
})
export class MultiColumnTableComponent implements OnChanges, OnInit {
  @Input({ required: true }) value: any[] = [];
  @Input() groupingFields: string[] = [];
  @Input({ required: true }) columns: TableColumn[] = [];

  private nodeId: number = 0;
  groupedData: any[] = [];
  expandedState: { [key: string]: boolean } = {};
  public get ungroupedColumns() {
    const groupingFieldsSet = new Set(this.groupingFields);
    return this.columns.filter((c) => !groupingFieldsSet.has(c.field));
  }
  getGroupRowStyle(level: number): any {
    const padding = level * 2;
    return { 'padding-left': `${padding}rem` };
  }

  ngOnInit() {
    this.initializeGrouping();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['groupingFields']) {
      this.initializeGrouping();
    }
  }

  initializeGrouping() {
    this.groupedData = this.groupData(this.value, this.groupingFields);
  }

  getColumnHeader(field: string): string {
    return this.columns.find((c) => c.field === field)?.name as string;
  }

  groupData(data: any[], fields: string[], level = 0): any[] {
    if (level >= fields.length) return data;

    const grouped = data.reduce((acc, item) => {
      const groupKey = item[fields[level]];
      if (!acc[groupKey]) acc[groupKey] = [];
      acc[groupKey].push(item);
      return acc;
    }, {});

    return Object.keys(grouped).map((key, index) => ({
      value: key,
      field: fields[level],
      id: this.nodeId++,
      level,
      children: this.groupData(grouped[key], fields, level + 1),
    }));
  }

  toggleExpand(id: string) {
    this.expandedState[id] = !this.expandedState[id];
  }

  isExpanded(id: string): boolean {
    return this.expandedState[id] || false;
  }
}
