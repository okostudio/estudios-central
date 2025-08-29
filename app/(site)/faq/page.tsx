import { fetchProducts, fetchStudiuoImages } from "@/sanity/sanity-utils";
import Nav from "@/components/nav";
import Footer from "@/components/partials/Footer";
import FaqComponent from "./faqComponent";

export default async function About() {
    const products = await fetchProducts();
    const page = await fetchStudiuoImages();


    return (
        <>
            <Nav products={products} />
            <FaqComponent page={page} />
            <Footer />
        </>
    );
}
