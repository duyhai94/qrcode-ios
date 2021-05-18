import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-home-confirm',
    templateUrl: './home-confirm.page.html',
    styleUrls: ['./home-confirm.page.scss'],
})
export class HomeConfirmPage implements OnInit {
    dataCode = [
        {
            label: "Full name",
            value: "Hoa Van Nguyen"
        },
        {
            label: "Date of birth",
            value: "06/20/1961"
        },
        {
            label: "Phone number",
            value: "(671) 486 6210"
        },
        {
            label: "1st dose",
            value: "12/17/2020"
        },
        {
            label: "2nd dose",
            value: "01/07/2021"
        }
    ]
    constructor(public modalController: ModalController) { }

    ngOnInit() {
    }

    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
        });
    }

}
