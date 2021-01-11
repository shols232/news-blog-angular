export class PreviewPost{
    constructor(
        public post_section: string,
        public preview_image: string,
        public title: string,
        public date_posted?: string
    ){}
}