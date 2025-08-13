
// import { fetchProducts } from "@/sanity/sanity-utils";
// import Products from "./components/products";

export default async function Home() {
  // const products = await fetchProducts();
  // console.log(products);

  // const selectedProducts = useState(() => {
  //   // return products.filter((product) => product.selected);
  // })


  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">Bienvenido a Estudios Central</h1>
        <p className="text-lg mb-4">Explora nuestros servicios y productos.</p>
        {/* Uncomment the line below to display products */}
        {/* <Products products={products} /> */}
        {/* <Products products={products} /> */}
      </div>
      {/* Uncomment the line below to display products */}
      {/* <Products products={products} /> */}

    </>
  );
}
