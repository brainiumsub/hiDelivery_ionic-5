import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderDetailsCustomerPage } from './order-details-customer.page';

const routes: Routes = [
  {
    path: '',
    component: OrderDetailsCustomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderDetailsCustomerPageRoutingModule {}
