import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

import { IonicModule } from '@ionic/angular';

import { HomeDetailPageRoutingModule } from './home-detail-routing.module';

import { HomeDetailPage } from './home-detail.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomeDetailPageRoutingModule,
        MatExpansionModule,
        MatIconModule,
        MatFormFieldModule,
    ],
    declarations: [HomeDetailPage]
})
export class HomeDetailPageModule { }
