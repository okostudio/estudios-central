
const nav = {
    name: 'nav',
    title: 'Nav',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'logo_blanco',
            title: 'Logo Blanco',
            type: 'image',
            options: {
                hotspot: true,
            },
            description: 'Logo para fondos oscuros',
        },
        {
            name: 'logo_oscuro',
            title: 'Logo Oscuro',
            type: 'image',
            options: {
                hotspot: true,
            },
            description: 'Logo para fondos blancos',
        },
        {
            name: "menu",
            title: "Menu",
            type: "array",
            of: [
                {
                    type: 'reference',
                    to: { type: "page" }
                }
            ],
        },
    ]
}

export default nav;