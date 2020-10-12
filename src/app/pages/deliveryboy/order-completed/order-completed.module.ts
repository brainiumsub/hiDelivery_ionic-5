import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderCompletedPageRoutingModule } from './order-completed-routing.module';

import { OrderCompletedPage } from './order-completed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderCompletedPageRoutingModule
  ],
  declarations: [OrderCompletedPage]
})
export class OrderCompletedPageModule {}
