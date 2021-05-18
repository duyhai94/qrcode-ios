import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, NgModule, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { IonicModule } from '@ionic/angular';
import { Subject } from 'rxjs';

const { BarcodeScanner } = Plugins;
@Component({
    selector: 'app-qr-webrtc',
    templateUrl: './qr-webrtc.component.html',
    styleUrls: ['./qr-webrtc.component.scss'],
})
export class QrWebrtcComponent implements OnInit, AfterViewInit {
    currentCode = new Subject();
    currentCode$ = this.currentCode.asObservable();
    qrCode: any;
    constructor(
        private router: Router
    ) { }
    ngOnInit() {
        this.checkPermission();
        this.prepare();
    };
    ngAfterViewInit() {
        this.startScan()
    }

    startScan = async () => {
        // check or request permission
        BarcodeScanner.hideBackground(); // make background of WebView transparent
        const result = await BarcodeScanner.startScan({ targetedFormats: ['QR_CODE'] }); // start scanning and wait for a result
        // if the result has content
        if (result.hasContent) {
            this.currentCode.next(result.content)
            console.log(result.content); // log the raw scanned content
        }
    };

    stopScan = () => {
        BarcodeScanner.showBackground();
        BarcodeScanner.stopScan();
    };
    prepare = () => {
        BarcodeScanner.prepare();
    };

    checkPermission = async () => {
        // check or request permission
        const status = await BarcodeScanner.checkPermission({ force: true });
        if (status.granted) {
            // the user granted permission
            return true;
        }
        return false;
    };




    comfirm() {
        // if (this.qrCode) {
        //     console.log(this.qrCode, 111);
        //     this.postService.postMethod().subscribe();
        // }
        this.router.navigate(['/home/home-detail']);
    }
}
@NgModule({
    declarations: [QrWebrtcComponent],
    imports: [IonicModule, RouterModule, CommonModule],
    exports: [QrWebrtcComponent],
})
export class QrWebrtcModule { }