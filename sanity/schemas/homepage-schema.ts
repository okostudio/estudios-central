import { group } from "console";

const homepage = {
    name: "homepage",
    title: "Home Page",
    type: "document",
    groups: [
        {
            name: 'hero',
            title: 'Hero Section',
        },
        {
            name: 'intro',
            title: 'Introduccion',
        },
        {
            name: 'estudios',
            title: 'Estudios',
        },
        {
            name: 'equipos',
            title: 'Equipos',
        },
        {
            name: 'faq',
            title: 'FAQ',
        },
    ],
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
            name: "intro",
            title: "Intro",
            type: "array",
            group: 'intro',
            of: [
                { type: "block" },
            ],
        },
        {
            name: 'small_studio_image',
            title: 'Imagen Estudio Chico',
            type: 'image',
            group: 'estudios',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                    description: 'Important for SEO and accessibility.',
                },
                {
                    name: 'caption',
                    title: 'Caption',
                    type: 'string'
                }
            ]
        },
        {
            name: 'large_studio_image',
            title: 'Imagen Estudio Grande',
            type: 'image',
            group: 'estudios',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                    description: 'Important for SEO and accessibility.',
                },
                {
                    name: 'caption',
                    title: 'Caption',
                    type: 'string'
                }
            ]
        },
        {
            name: "homepage_products",
            title: "Equipos (Homepage)",
            description: 'Elegi 6 equipos para mostrar en la pagina principal',
            type: "array",
            group: 'equipos',
            of: [
                {
                    type: 'reference',
                    to: { type: "product" },
                    limits: {
                        maxItems: 6 // Limit the number of images in the gallery   
                    }
                }
            ],
        },
        {
            name: "faq_list",
            title: "FAQ List",
            type: "array",
            description: "Lista de preguntas frecuentes",
            group: 'faq',
            of: [
                {
                    type: 'object',
                    name: 'faq_item',
                    title: 'FAQ Item',
                    fields: [
                        {
                            name: 'question',
                            type: 'string',
                            title: 'Pregunta'
                        },
                        {
                            name: 'answer',
                            type: 'string',
                            title: 'Respuesta'
                        },
                        {
                            name: 'url',
                            type: 'url',
                            title: 'URL',
                            description: 'Opcional: Link para mas informacion',
                        }
                    ],
                },
            ],
        }
    ]
}

export default homepage;


