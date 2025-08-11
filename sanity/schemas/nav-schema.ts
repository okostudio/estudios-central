
const nav = {
    name: 'nav',
    title: 'Nav',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'logo-blanco',
            title: 'Logo Blanco',
            type: 'image',
            options: {
                hotspot: true,
            },
            description: 'Logo para fondos oscuros',
        },
        {
            name: 'logo-oscuro',
            title: 'Logo Oscuro',
            type: 'image',
            options: {
                hotspot: true,
            },
            description: 'Logo para fondos blancos',
        },
    ]
}

export default nav;