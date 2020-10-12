import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationTwoPage } from './notification-two.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationTwoPageRoutingModule {}
