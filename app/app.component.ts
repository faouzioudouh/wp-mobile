import {Component} from "@angular/core";
import {RouteConfig} from "@angular/router-deprecated";
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router";
import {PostsPage} from "./pages/posts/posts.component";


@Component({
    selector: "main",
    directives:[NS_ROUTER_DIRECTIVES],
    providers:[NS_ROUTER_PROVIDERS],
    template: '<page-router-outlet></page-router-outlet>'
})

@RouteConfig([
    {path: "/posts", name:"Posts", component: PostsPage, useAsDefault: true}
])

export class AppComponent {}
