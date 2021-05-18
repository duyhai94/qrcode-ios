import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { HomeConfirmPage } from './home-confirm/home-confirm.page';

const { BarcodeScanner } = Plugins;
@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {

    currentCode = new Subject();
    currentCode$ = this.currentCode.asObservable();
    qrCode: any;
    constructor(
        private router: Router,
        public alertController: AlertController,
        public modalController: ModalController
    ) { }
    ngOnInit() {
        this.checkPermission();
        this.prepare();
        this.currentCode$.subscribe(res => {
            if (res) {

                this.presentAlertConfirm(res)
            }
        })
    };
    ngAfterViewInit() {
        this.startScan()
    }

    startScan = async () => {
        //check or request permission
        BarcodeScanner.hideBackground(); // make background of WebView transparent
        const result = await BarcodeScanner.startScan({ targetedFormats: ['QR_CODE'] }); // start scanning and wait for a result
        // if the result has content
        console.log(result);

        if (result.hasContent) {
            this.currentCode.next(result.content);

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

        this.router.navigate(['/home/home-detail']);
    }



    async presentAlertConfirm(res) {
        const alert = await this.alertController.create({
            cssClass: 'alert ',
            header: 'Confirm!',
            message: res,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        this.startScan();
                    }
                }, {
                    text: 'Ok',
                    handler: () => {
                        this.presentModal();
                    }
                }
            ]
        });

        await alert.present();
    };


    async presentModal() {
        const modal = await this.modalController.create({
            component: HomeConfirmPage,
            cssClass: 'my-custom-class',
            componentProps: {

            }
        });
        modal.onDidDismiss().then((m) => {
            this.startScan();
        })


        return await modal.present();
    }

}
