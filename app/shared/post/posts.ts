import {Injectable} from "@angular/core";
import {Config} from "../config";
import {Post} from "./post";
import {Observable, BehaviorSubject} from "rxjs/Rx"
import {Http, Headers, Response } from "@angular/http";

@Injectable()
export class Posts{

    public items: BehaviorSubject<Array<Post>> = new BehaviorSubject([]);
    private _all_items: Array<Post> = [];

    constructor(private _http: Http){}   

    load(){

        this._http.get(
            Config.apiUrl + "get_posts/" 
        )
        .map(this.extractData)
        .catch(this.handleError)

        return Promise.resolve(this._all_items);
    }

    private extractData(res: Response){
        let body = res.json(); return body.data || { };
    }

    private handleError(error: any){
         console.error(error.message);
         return Observable.throw(error.message); }
    }


}