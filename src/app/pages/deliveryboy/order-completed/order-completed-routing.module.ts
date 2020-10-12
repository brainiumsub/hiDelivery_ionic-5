import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderCompletedPage } from './order-completed.page';

const routes: Routes = [
  {
    path: '',
    component: OrderCompletedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderCompletedPageRoutingModule {}
