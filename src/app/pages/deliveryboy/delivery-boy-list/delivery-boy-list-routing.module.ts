import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryBoyListPage } from './delivery-boy-list.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveryBoyListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryBoyListPageRoutingModule {}
