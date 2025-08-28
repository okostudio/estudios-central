import { fetchProducts } from "@/sanity/sanity-utils";
import Nav from "@/components/nav";
import Footer from "@/components/partials/Footer";
import HomeComponent from "./homeComponent";
import SmoothScroll from "@/components/common/SmoothScroll";

export default async function About() {
  const products = await fetchProducts();

  return (
    <>
      <SmoothScroll />
      <Nav products={products} />
      <HomeComponent />
      <Footer />
    </>
  );
}
