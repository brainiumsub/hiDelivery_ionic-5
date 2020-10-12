import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationOnePage } from './notification-one.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationOnePageRoutingModule {}
