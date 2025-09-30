const product = {
    name: 'product',
    title: 'Products',
    type: 'document',
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
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'stock',
            title: 'Stock Count',
            type: 'number',
            options: {
                min: 0,
                max: 9999
            }
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Tripode', value: 'tripode' },
                    { title: 'Grip', value: 'grip' },
                    { title: 'Flash', value: 'flash' },
                    { title: 'Luz Continua', value: 'luz-continua' },
                    { title: 'Modificador Luz', value: 'modificador-luz' },
                    { title: 'Digital', value: 'digital' },
                    { title: 'Camara', value: 'camara' },
                    { title: 'Fondo', value: 'fondo' },
                    { title: 'Accesorios', value: 'accesorios' },
                    { title: 'Kits', value: 'kits' },
                ],
            },
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ]
}

export default product;