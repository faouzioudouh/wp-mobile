import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router-deprecated";
import {Page} from 'ui/page';
import {Post} from "../../shared/post/post";


@Component({
    selector: 'posts',
    templateUrl: "pages/posts/posts.html"
})

export class PostsPage implements OnInit{

    isAndroid;
    
    constructor(private page: Page, private _router:Router){}

    ngOnInit(){
        this.isAndroid = !!this.page.android;
        if( this.isAndroid){
            //alert('horry, this is android, Thanks!');
        }
    }
}