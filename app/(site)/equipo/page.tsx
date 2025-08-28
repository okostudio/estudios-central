import { fetchProducts } from "@/sanity/sanity-utils";
import EquipoComponent from "./equipoComponent";
import Nav from "@/components/nav";
import Footer from "@/components/partials/Footer";

export default async function About() {
    const products = await fetchProducts();

    return (
        <>
            <Nav products={products} />
            <EquipoComponent products={products} />
            <Footer />
        </>
    );
}
