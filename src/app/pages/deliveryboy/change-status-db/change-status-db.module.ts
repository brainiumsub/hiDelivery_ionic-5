import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeStatusDbPageRoutingModule } from './change-status-db-routing.module';

import { ChangeStatusDbPage } from './change-status-db.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeStatusDbPageRoutingModule
  ],
  declarations: [ChangeStatusDbPage]
})
export class ChangeStatusDbPageModule {}
