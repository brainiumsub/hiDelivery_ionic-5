import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderDetailsDeliveryPage } from './order-details-delivery.page';

const routes: Routes = [
  {
    path: '',
    component: OrderDetailsDeliveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderDetailsDeliveryPageRoutingModule {}
