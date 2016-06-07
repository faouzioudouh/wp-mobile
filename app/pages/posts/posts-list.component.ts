import {Component} from "@angular/core";
import {Post} from "../../shared/post/post";
import {Posts} from "../../shared/post/posts";

@Component({
    selector: 'posts-list',
    templateUrl:'pages/posts/posts.html'
})

/**
 * PostsList
 */
export class PostsList {
    
    listLoaded = false;

    constructor(private postsList: Posts ) {
        alert('loading data ');
        setTimeout(() => {
            this.load();
        });
    }

    load(){

        this.postsList.load()
        .then(
            () => {
                this.listLoaded = false;
                alert('data loaded');
            },
            (error) => {
                alert('error occured!');                
            }
        )

    }

}