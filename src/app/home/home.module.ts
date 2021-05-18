import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { QrWebrtcModule } from './utils/qr-webrtc/qr-webrtc.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule.forRoot({
            rippleEffect: false,
            mode: 'ios'
        }),
        HomePageRoutingModule,
        QrWebrtcModule


    ],
    declarations: [HomePage]
})
export class HomePageModule { }
