import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class PostService {
    constructor(private http: HttpClient) {

    }
    postMethod = () => {
        return this.http.post(`https://xktagmr2ec.execute-api.ap-southeast-1.amazonaws.com/dev/scan/mdcare`, null)
    }
}