import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customerservice';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TagModule } from 'primeng/tag';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-multi-column-table',
  templateUrl: 'multi-column-table.component.html',
  standalone: true,
  imports: [
    TableModule,
    HttpClientModule,
    ButtonModule,
    RippleModule,
    TagModule,
    NgFor,
    NgIf,
    NgClass,
  ],
  providers: [CustomerService],
  styles: [
    `
      :host ::ng-deep .p-rowgroup-footer td {
        font-weight: 700;
      }

      :host ::ng-deep .p-rowgroup-header {
        span {
          font-weight: 700;
        }

        .p-row-toggler {
          margin-right: 0.5rem;
        }
      }
    `,
  ],
})
export class MultiColumnTableComponent implements OnInit {
  customers: any[] = [];
  expandedRepresentatives: { [key: string]: boolean } = {};
  expandedCountries: { [key: string]: boolean } = {};

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customers = [
      {
        representative: { name: 'John', image: 'john.png' },
        countries: [
          {
            country: 'USA',
            customers: [
              {
                name: 'Customer 1',
                company: 'Company A',
                status: 'Active',
                date: '2021-01-01',
              },
              {
                name: 'Customer 2',
                company: 'Company B',
                status: 'Inactive',
                date: '2021-02-01',
              },
            ],
          },
          {
            country: 'Canada',
            customers: [
              {
                name: 'Customer 3',
                company: 'Company C',
                status: 'Active',
                date: '2021-03-01',
              },
            ],
          },
        ],
      },
      {
        representative: { name: 'Jane', image: 'jane.png' },
        countries: [
          {
            country: 'UK',
            customers: [
              {
                name: 'Customer 4',
                company: 'Company D',
                status: 'Active',
                date: '2021-04-01',
              },
            ],
          },
        ],
      },
      // More representatives...
    ];
  }
  toggleRepresentative(representativeName: string) {
    this.expandedRepresentatives[representativeName] =
      !this.expandedRepresentatives[representativeName];
  }

  toggleCountry(countryName: string) {
    this.expandedCountries[countryName] = !this.expandedCountries[countryName];
  }

  isRepresentativeExpanded(representativeName: string): boolean {
    return this.expandedRepresentatives[representativeName] || false;
  }

  isCountryExpanded(countryName: string): boolean {
    return this.expandedCountries[countryName] || false;
  }
}
