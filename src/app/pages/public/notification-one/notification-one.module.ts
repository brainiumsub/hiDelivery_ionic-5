import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationOnePageRoutingModule } from './notification-one-routing.module';

import { NotificationOnePage } from './notification-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationOnePageRoutingModule
  ],
  declarations: [NotificationOnePage]
})
export class NotificationOnePageModule {}
