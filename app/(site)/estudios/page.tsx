
import { fetchProducts } from "@/sanity/sanity-utils";
import Products from "../components/products";

export default async function Studios() {
    const products = await fetchProducts();
    console.log(products);

    // const selectedProducts = useState(() => {
    //   // return products.filter((product) => product.selected);
    // })


    return (
        <>
            <h1>ESTUDIOS</h1>
            <Products products={products} />

        </>
    );
}
