import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeConfirmPageRoutingModule } from './home-confirm-routing.module';

import { HomeConfirmPage } from './home-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeConfirmPageRoutingModule
  ],
  declarations: [HomeConfirmPage]
})
export class HomeConfirmPageModule {}
