import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
    selector: 'app-home-detail',
    templateUrl: './home-detail.page.html',
    styleUrls: ['./home-detail.page.scss'],
})
export class HomeDetailPage implements OnInit {
    buttonIcon: "assets/icon/back.svg";
    step = 0;


    constructor() { }

    ngOnInit() {
    }

    dataInfo = [
        {
            label: "Full name",
            value: "Huyen Bui"
        },
        {
            label: "Patient ID",
            value: "PT56282"
        },
        {
            label: "Address",
            value: "15427 North"
        },
        {
            label: "Phone",
            value: "079000000000"
        },
        {
            label: "Email",
            value: "info@mdcareclik.com"
        },
    ]


    dataAcc = [
        {
            label: "Test Kit",
            value: "info@mdcareclik.com"
        },
        {
            label: "Appointment ID",
            value: "APT94953025"
        },
        {
            label: "Test Type",
            value: "NAAT:RT-PCR"
        },
        {
            label: "Collected Date",
            value: "11-29-2020"
        },
        {
            label: "Result Date",
            value: "11-29-2020"
        },
        {
            label: "Testing Lab Name",
            value: "CCL"
        },
    ]

    dataPhy = [
        {
            label: "Name of Provider",
            value: "Dr. Nguyen, Linh"
        },
        {
            label: "ATTN:",
            value: ""
        },
        {
            label: "Location Name",
            value: "Ha Noi, Vietnam"
        }
    ]






}

