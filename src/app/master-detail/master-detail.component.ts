import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  standalone: true,
  selector: 'app-master-detail',
  templateUrl: './master-detail.component.html',
  imports: [TableModule, FormsModule, NgClass, NgIf, ButtonModule],
})
export class MasterDetailComponent {
  masterData = [
    {
      id: 1,
      name: 'Product A',
      category: 'Category 1',
      expanded: false,
      details: [
        { id: 1, description: 'Component X', quantity: 10 },
        { id: 2, description: 'Component Y', quantity: 5 },
        { id: 3, description: 'Component Z', quantity: 8 },
      ],
    },
    {
      id: 2,
      name: 'Product B',
      category: 'Category 1',
      expanded: false,
      details: [
        { id: 4, description: 'Component W', quantity: 15 },
        { id: 5, description: 'Component Q', quantity: 12 },
        { id: 6, description: 'Component R', quantity: 6 },
      ],
    },
    {
      id: 3,
      name: 'Product C',
      category: 'Category 2',
      expanded: false,
      details: [],
    },
    {
      id: 4,
      name: 'Product D',
      category: 'Category 2',
      expanded: false,
      details: [
        { id: 9, description: 'Part C', quantity: 10 },
        { id: 10, description: 'Part D', quantity: 5 },
        { id: 11, description: 'Part E', quantity: 8 },
      ],
    },
    {
      id: 5,
      name: 'Product E',
      category: 'Category 3',
      expanded: false,
      details: [
        { id: 12, description: 'Module X', quantity: 17 },
        { id: 13, description: 'Module Y', quantity: 9 },
      ],
    },
    {
      id: 6,
      name: 'Product F',
      category: 'Category 3',
      expanded: false,
      details: [
        { id: 14, description: 'Unit A', quantity: 13 },
        { id: 15, description: 'Unit B', quantity: 7 },
        { id: 16, description: 'Unit C', quantity: 11 },
      ],
    },
    {
      id: 7,
      name: 'Product G',
      category: 'Category 4',
      expanded: false,
      details: [
        { id: 17, description: 'Item P', quantity: 22 },
        { id: 18, description: 'Item Q', quantity: 6 },
      ],
    },
    {
      id: 8,
      name: 'Product H',
      category: 'Category 4',
      expanded: false,
      details: [
        { id: 19, description: 'Component M', quantity: 10 },
        { id: 20, description: 'Component N', quantity: 12 },
        { id: 21, description: 'Component O', quantity: 4 },
      ],
    },
  ];
}
