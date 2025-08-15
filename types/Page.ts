export type Page = {
    _id: string;
    _createdAt: string;
    title: string;
    slug: string;
    galleryImages: {
        _key: string;
        _type: 'image';
        asset: {
            _ref: string;
            _type: 'reference';
        };
        width: number;
    }[];
}