import { fetchProducts } from "@/sanity/sanity-utils";
import EquiposComponent from "./equiposComponent";
import Nav from "@/components/nav";
import Footer from "@/components/partials/Footer";

export default async function About() {
    const products = await fetchProducts();

    return (
        <>
            <Nav products={products} />
            <EquiposComponent products={products} />
            <Footer />
        </>
    );
}
