
// import { fetchProducts } from "@/sanity/sanity-utils";
// import Products from "./components/products";

import Link from "next/link"
import Hero from "../../components/hero";

export default async function Home() {
  // const products = await fetchProducts();
  // console.log(products);

  // const selectedProducts = useState(() => {
  //   // return products.filter((product) => product.selected);
  // })


  return (
    <>
      <Hero />
      <div className="container mx-auto px-4">
        <div className="hero grid grid-cols-1 md:grid-cols-12 gap-2 mb-8">

          <Link href={"/estudios"} className="relative group md:col-span-8">
            <img
              src="/_studio-01.jpg"
              alt="Hero Image"
              className="w-full h-svw md:w-auto md:h-full object-cover"
            />
            <div className="absolute w-full top-0"><h2 className="m-8 py-2 px-6 transition-padding duration-300 ease-out group-hover:pl-7 bg-black opacity-95 text-white mx-auto inline-block text-center font-bold text-3xl lg:text-5xl">Estudios</h2></div>
          </Link>
          <Link href={"/equipo"} className="relative group md:col-span-4">
            <img
              src="/Digital-Camera-Canon-RF-15-35mm-f2.8-L-IS-USM.jpg"
              alt="Hero Image"
              className="w-full h-svw md:w-auto md:h-full object-cover"
            />
            <div className="absolute w-full top-0"><h2 className="m-8 py-2 px-6 transition-padding duration-300 ease-out group-hover:pl-7 bg-black opacity-95 text-white mx-auto inline-block text-center font-bold text-3xl lg:text-5xl">Equipo</h2></div>
          </Link>
        </div>
      </div>

    </>
  );
}
