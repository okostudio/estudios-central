
import { fetchStudiuoImages } from "@/sanity/sanity-utils";
import { Image } from "next-sanity/image";

export default async function Studios() {
    const photos = await fetchStudiuoImages();
    console.log(photos[0].galleryImages);

    // const selectedProducts = useState(() => {
    //   // return products.filter((product) => product.selected);
    // })


    return (
        <>
            <div className="container mx-auto px-4">
                <div className="gallery grid grid-cols-1 md:grid-cols-12 gap-2 mb-8">
                    {photos[0].galleryImages.map((image) => (
                        <Image
                            key={image._key}
                            width={image.asset.metadata.dimensions.width}
                            height={image.asset.metadata.dimensions.height}
                            src={image.asset.url}
                            alt={`Gallery Image ${image._key}`}
                            className={`w-full h-dvw md:h-full object-cover ${image.width === 4 ? "md:col-span-4" : image.width === 8 ? "md:col-span-8" : "md:col-span-12"}`}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
