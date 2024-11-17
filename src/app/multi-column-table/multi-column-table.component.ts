import { JsonPipe, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  OnInit,
  Input,
  ContentChild,
  TemplateRef,
  ViewChild,
  ElementRef,
  Renderer2,
  AfterContentInit,
  ViewContainerRef,
} from '@angular/core';
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
  @Input() value: any[] = [];
  @Input() groupingFields: string[] = [];
  @ContentChild('headerTemplate') headerTemplate!: TemplateRef<any>;
  @ContentChild('bodyTemplate') bodyTemplate!: TemplateRef<any>;
  @ViewChild('bodyTemplate', { static: true })
  bodyTemplateViewChild!: ElementRef;

  groupedData: any[] = [];
  expandedState: { [key: string]: boolean } = {};

  ngOnInit() {
    this.groupedData = this.groupData(this.value, this.groupingFields);
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
