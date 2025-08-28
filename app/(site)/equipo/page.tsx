import { fetchProducts } from "@/sanity/sanity-utils";
import EquipoComponent from "./equipoComponent";

export default async function About() {
    const products = await fetchProducts();


    return (
        <>
            <EquipoComponent products={products} />
        </>
    );
}
