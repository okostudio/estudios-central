// Holds all the functions and utilities for Sanity integration
import { Product } from '@/types/Product';

import { createClient, groq } from 'next-sanity';
import clientConfig from './config/client-config';
// import config from '@/sanity.config';


export async function fetchProducts(): Promise<Product[]> {

    const query = groq`*[_type == "product"]{
        _id,
        _createdAt,
        title,
        description,
        price,
        category,
        "imageUrl": image.asset->url,
        "imageAlt": image.alt,
    }`;
    return await createClient(clientConfig).fetch(query);
}
