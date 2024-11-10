import { Component, OnInit } from '@angular/core';
import { Customer } from '../domain/customer';
import { CustomerService } from '../customerservice';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TagModule } from 'primeng/tag';

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
          vertical-align: middle;
          margin-right: 0.25rem;
        }
      }
    `,
  ],
})
export class MultiColumnTableComponent implements OnInit {
  customers!: Customer[];

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService.getCustomersMedium().then((data) => {
      this.customers = data;
    });
  }

  calculateCustomerTotal(name: string) {
    let total = 0;

    if (this.customers) {
      for (let customer of this.customers) {
        if (customer.representative?.name === name) {
          total++;
        }
      }
    }

    return total;
  }

  getSeverity(status: string) {
    switch (status) {
      case 'unqualified':
        return 'danger';

      case 'qualified':
        return 'success';

      case 'new':
        return 'info';

      case 'negotiation':
        return 'warning';

      case 'renewal':
        return undefined;

      default:
        return undefined;
    }
  }
}
