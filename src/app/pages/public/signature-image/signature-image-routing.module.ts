import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignatureImagePage } from './signature-image.page';

const routes: Routes = [
  {
    path: '',
    component: SignatureImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignatureImagePageRoutingModule {}
