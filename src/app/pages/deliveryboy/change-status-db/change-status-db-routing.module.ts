import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeStatusDbPage } from './change-status-db.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeStatusDbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeStatusDbPageRoutingModule {}
