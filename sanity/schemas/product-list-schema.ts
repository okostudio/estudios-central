
const productList = {
    name: 'product-list',
    title: 'Product List',
    type: 'object',
    description: 'Lista de productos de equipo',
    icon: '@sanity/thumbnails/product-list.png',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
    ]
}

export default productList;