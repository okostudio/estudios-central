
// import { fetchProducts } from "@/sanity/sanity-utils";
// import Products from "./components/products";

import Link from "next/link"

export default async function Home() {
  // const products = await fetchProducts();
  // console.log(products);

  // const selectedProducts = useState(() => {
  //   // return products.filter((product) => product.selected);
  // })


  return (
    <>
      <section className="relative w-full h-[80vh] bg-gray-950 mb-20">
        <video muted autoPlay loop playsInline disablePictureInPicture className="absolute w-full h-full object-cover">
          <source src="/placeholder-video-hero.mp4" type="video/mp4" />
          {/* Your browser does not support the video tag. */}
        </video>

        <div className="absolute top-0 h-full w-full md:col-span-12 py-24 md:py-48 px-12 text-center">
          <h1 className="text-gray-800 text-center font-bold text-3xl md:text-5xl">Estudios Central</h1>
          <p className="text-gray-800 text-center text-md md:text-xl">Somos lorem ipsum dolor sic plam bam. Quintos quo pro ipomos lorem ipsum dolor sic plam shambam.</p>
        </div>
      </section>
      <div className="container mx-auto px-4">
        <div className="hero grid grid-cols-1 md:grid-cols-12 gap-2 mb-8">

          <Link href={"/estudios"} className="relative group md:col-span-8">
            <img
              src="/_studio-01.jpg"
              alt="Hero Image"
              className="w-auto h-full object-cover"
            />
            <div className="absolute w-full top-0"><h2 className="m-8 py-2 px-6 transition-padding duration-300 ease-out group-hover:pl-7 bg-gray-900 opacity-95 text-white mx-auto inline-block text-center font-bold text-3xl lg:text-5xl">Estudios</h2></div>
          </Link>
          <Link href={"/equipo"} className="relative group md:col-span-4">
            <img
              src="/Digital-Camera-Canon-RF-15-35mm-f2.8-L-IS-USM.jpg"
              alt="Hero Image"
              className="w-auto h-full object-cover"
            />
            <div className="absolute w-full top-0"><h2 className="m-8 py-2 px-6 transition-padding duration-300 ease-out group-hover:pl-7 bg-gray-900 opacity-95 text-white mx-auto inline-block text-center font-bold text-3xl lg:text-5xl">Equipo</h2></div>
          </Link>
        </div>
      </div>

    </>
  );
}
