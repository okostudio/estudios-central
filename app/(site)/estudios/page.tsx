import { fetchProducts, fetchStudiuoImages } from "@/sanity/sanity-utils";
import EstudiosComponent from "./estudiosComponent";
import Nav from "@/components/nav";
import Footer from "@/components/partials/Footer";

export default async function About() {
    const products = await fetchProducts();
    const page = await fetchStudiuoImages();


    return (
        <>
            <Nav products={products} />
            <EstudiosComponent page={page} />
            <Footer />
        </>
    );
}
