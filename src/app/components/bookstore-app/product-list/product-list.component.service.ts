import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators'

@Injectable({
    providedIn: "root"
})
export class BookService {
    
    private url = 'https://api.itbook.store/1.0/new';

    httpOptions = {
        headers: new HttpHeaders({'content-type': 'application/json'})
    }

    constructor(private http: HttpClient) {}

    getBook():Observable<any> {
        return this.http.get(this.url).pipe(
            map(res => res)
        )
    }

}