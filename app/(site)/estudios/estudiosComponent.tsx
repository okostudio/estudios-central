
import Nav from "@/components/nav";
import Footer from "@/components/partials/Footer";
import Map from "@/components/partials/Map";
import { Page } from "@/types/Page";
import { Image } from "next-sanity/image";



type EstudiosComponentProps = {
    page: Page[];
};

export default function EstudiosComponent({
    page,
}: EstudiosComponentProps) {

    return (
        <>
            <div className="container mx-auto px-4">
                <div className="gallery grid grid-cols-1 md:grid-cols-12 gap-2 mb-8">
                    {page[0].galleryImages.map((image) => (
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
            <Map />
        </>
    );
}
