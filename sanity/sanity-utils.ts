// Holds all the functions and utilities for Sanity integration
import { createClient, groq } from 'next-sanity';
import clientConfig from './config/client-config';

import { ProductType } from '@/types/Product';
import { NavType } from '@/types/Nav';
import { Page } from '@/types/Page';


export async function fetchProducts(): Promise<ProductType[]> {

    const query = groq`*[_type == "product"]{
        _id,
        _createdAt,
        title,
        description,
        price,
        stock,
        category,
        "imageUrl": image.asset->url,
        "imageAlt": image.alt,
    }`;
    return await createClient(clientConfig).fetch(query);
}

export async function fetchNav(): Promise<NavType[]> {

    const query = groq`*[_type == "nav"]{
        _id,
        _createdAt,
        title,
        "logo_blancoUrl": logo_blanco.asset->url,
        "logo_oscuroUrl": logo_blanco.asset->url,
        menu[]-> {
            _id,
            title,
            "slug": slug.current
        },
    }`;
    return await createClient(clientConfig).fetch(query);
}

export async function fetchStudiuoImages(): Promise<Page[]> {
    const query = groq`*[title == "Estudios"]{
        _id,
        _createdAt,
            galleryImages[] {
                _key,
                asset-> { 
                    url,
                    metadata {
                        dimensions {
                            width,
                            height,
                            aspectRatio
                        }
                },
            },
            width   
        }
    }`;
    return await createClient(clientConfig).fetch(query);
}
// "pageSlug": pageReferenceField->slug.current

