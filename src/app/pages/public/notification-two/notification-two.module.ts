import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationTwoPageRoutingModule } from './notification-two-routing.module';

import { NotificationTwoPage } from './notification-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationTwoPageRoutingModule
  ],
  declarations: [NotificationTwoPage]
})
export class NotificationTwoPageModule {}
