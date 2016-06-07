
/**
 * Post
 */
export class Post {

    constructor(
        public id: number,
        public type: string,
        public slug: string,
        public url: string,
        public status: string,
        public title: string,
        public title_plain: string,
        public content: string,
        public excerpt: string,
        public date: string,
        public modified: string,
        public thumbnail: string,
        public categories: any[],
        public tags: any[],
        public comments: any[],
        public comment_count: any[], 
        public comment_status: any[], 
        public attachments: any[],
        public thumbnail_images: any[]

    ) {}
}