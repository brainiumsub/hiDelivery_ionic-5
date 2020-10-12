import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignatureImagePageRoutingModule } from './signature-image-routing.module';

import { SignatureImagePage } from './signature-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignatureImagePageRoutingModule
  ],
  declarations: [SignatureImagePage]
})
export class SignatureImagePageModule {}
