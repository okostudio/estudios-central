export type NavType = {
    _id: string;
    _createdAt: string;
    title: string;
    logo_blancoUrl: string;
    logo_oscuroUrl: string;
    menu: Array<{
        _type: 'reference';
        _ref: string;
    }>;
}  
