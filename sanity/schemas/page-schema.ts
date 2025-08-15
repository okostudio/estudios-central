
const page = {
    name: "page",
    title: "Pages",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96
            }
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [
                { type: "block" },
            ],
        },
        {
            name: 'galleryImages',
            title: 'Image Gallery',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true // Allows defining a hotspot for responsive image cropping
                    },
                    fields: [ // Optional: add custom fields to each image in the array
                        {
                            name: 'width',
                            title: 'Width',
                            type: 'number',
                            description: 'Ancho de la imagen - tiene que ser 4, 8, o 12',
                        }
                    ]
                }
            ]
        }
    ]
}

export default page;


