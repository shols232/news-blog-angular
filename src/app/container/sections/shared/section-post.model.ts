export class SectionPost{
    constructor(
        public image: string,
        public title: string,
        public posted?: string
    ){}
}

export class FullSectionPost{
    constructor(
        public image: string,
        public video: string,
        public content: string,
        public title: string,
        public posted: string,
        public section: string,
        public slug: string,
        ){}
}