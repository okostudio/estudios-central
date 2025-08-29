"use client"

import CursorFollowWrapper from "@/components/common/CursorFollowWrapper";
import { WhatsappIcon } from "@/components/icons/icons";
import Map from "@/components/partials/Map";
import useDeviceDetection from "@/libs/hooks/useDeviceDetection";
import { Page } from "@/types/Page";
import { Image } from "next-sanity/image";
import { useRef } from "react";



type EstudiosComponentProps = {
    page: Page[];
};

export default function EstudiosComponent({
    page,
}: EstudiosComponentProps) {
    const isMobile = useDeviceDetection();

    const chicoRef = useRef<HTMLDivElement>(null);
    const grandeRef = useRef<HTMLDivElement>(null);

    return (
        <CursorFollowWrapper>
            <div className="mx-auto ">
                <section className="intro bg-red-500 px-4 mb-16">
                    <div className="container mx-auto min-h-[100svh] flex items-center">
                        <div className="py-24">
                            <h1 className="text-5xl md:text-7xl mb-8 xl:w-[80%]">Central estudios, ofrecen espacio para producciones fotográficas y audiovisual.</h1>
                            <p className="text-xl md:text-3xl mb-8">El espacio de 413 metros cuadrados se divide en varias areas, cuenta con dos estudios , un area en común , entrada de vehiculo  , patio abierto con opción de techado, escalera rebatible, elevador. Ademas cuenta con un rental de fotografía y audiovisual con un amplio listado de flashes, luces, cámara y grip.</p>
                            <div className="mb-16">
                                <button
                                    className="secondary button-large mr-4 mb-4"
                                    onClick={() => chicoRef.current?.scrollIntoView({ behavior: "smooth" })}
                                >Ver Estudio Chico</button>
                                <button
                                    className="secondary button-large"
                                    onClick={() => grandeRef.current?.scrollIntoView({ behavior: "smooth" })}
                                >Ver Estudio Grande</button>
                            </div>
                            <img
                                src={"/plano-black.png"}
                                alt={""}

                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </section>

                <section ref={grandeRef} className="estudio-grande">
                    <div className="container px-4 mx-auto min-h-[100svh] flex items-center">
                        <div className="pt-24 grid md:grid-cols-2 gap-16" dir={isMobile ? "ltr" : "rtl"}>
                            <div dir="ltr">
                                <h2 className="text-5xl md:text-7xl mb-8">Estudio Grande</h2>
                                <p className="text-lg md:text-2xl mb-4">El estudio 1 de 216 mts2  ubicado en planta baja, cuenta con un sin fin de 12 metros de ancho por 6 de largo, parrilla de luces motorizada y tamiz, aires acondicionados, luz natural con opción de bloqueo,aislacion acustica ,entrada vehicular ,  corrientes trifasica con potencia contratada de Cx le cocina equipada, 2 baños , mesa doble de maquillaje y pelo .</p>

                                <p className="text-lg md:text-2xl mb-4">El estudio 1 con su diseño amplio y abierto permite un uso flexible del espacio. Su parrilla de luces motorizada hace práctico el armado de set y da un variada posibilidad de esquemas de luces y gripeo .</p>

                                <p className="text-lg md:text-2xl mb-16">Los  tragaluces hacen un espacio muy luminoso y agradable</p>

                                <h3 className="text-4xl md:text-6xl mb-4">Equipos</h3>
                                <ul className="list-disc text-lg md:text-2xl grid grid-cols-2 md:grid-cols-4 gap-2 gap-x-16 mb-16">
                                    <li>Tripodes</li>
                                    <li>boom</li>
                                    <li>tamiz</li>
                                    <li>banderas</li>
                                    <li>difusiones</li>
                                    <li>3 medidas</li>
                                    <li>rotulas</li>
                                    <li>pinzas</li>
                                    <li>alargues</li>
                                </ul>

                                <h3 className="text-4xl md:text-6xl mb-4">Equipamiento</h3>
                                <ul className="list-disc text-lg md:text-2xl grid grid-cols-2 md:grid-cols-4 gap-2 gap-x-16 mb-16">
                                    <li>elevador</li>
                                    <li>mesas</li>
                                    <li>sillas</li>
                                    <li>heladera</li>
                                    <li>mesa de maquillaje</li>
                                    <li>cafetera</li>
                                    <li>microondas</li>
                                    <li>plancha a vapor</li>
                                </ul>

                                <h3 className="text-4xl md:text-6xl mb-4">Área común</h3>
                                <ul className="list-disc text-lg md:text-2xl grid md:grid-cols-2 gap-2 gap-x-16 mb-16">
                                    <li>Entrada vehicular</li>
                                    <li>Patio abierto con opción de cerrado</li>
                                    <li>Posibilidad de armado de mesas para comer</li>
                                    <li>Mesa de Ping pong</li>
                                </ul>
                                <div>
                                    <button
                                        className="black button-large flex items-center gap-3 text-white rounded-full px-4 py-4 mb-1 mx-auto bg-black hover:bg-green-700"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const phoneNumber = "+59891068840"; // e.g., "1234567890"
                                            const draftMessage = [
                                                "Hola, me gustaría reservar el *Estudio Grande:*",
                                                "¿Podrían confirmarme la disponibilidad?"
                                            ].join('\n');
                                            const encodedMessage = encodeURIComponent(draftMessage);
                                            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                                            window.open(whatsappUrl, "_blank");

                                        }}
                                    ><span className='text-xs md:text-lg'>Solicitud Estudio por WhatsApp</span> <WhatsappIcon /></button>
                                    <p className="italic text-xs text-center">Se abrirá WhatsApp con tu selección prellenada.</p>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={"/studio-lrg.jpg"}
                                    alt={""}
                                    className="w-full aspect-square h-auto object-cover mb-8"
                                />
                                <img
                                    src={"/_studio-01.jpg"}
                                    alt={""}
                                    className="w-full h-auto object-cover "
                                />
                            </div>
                        </div>
                    </div>
                    <div className="container px-4 pb-24 pt-16 mx-auto">

                    </div>



                </section>

                <section ref={chicoRef} className="estudio-chico bg-gray-100">
                    <div className="container px-4 pt-16 mx-auto min-h-[100svh] flex items-center">
                        <div className="py-16 grid md:grid-cols-2 gap-16">
                            <div>
                                <h2 className="text-5xl md:text-7xl mb-8">Estudio Chico</h2>
                                <p className="text-lg md:text-2xl mb-4">El estudio 2 de 78 mts2 ubicado en planta alta cuenta con acceso por comoda escalera y elevador  , sin fin de 6 x 4 metros , luz natural orientación norte ,con  techo corredizo para bloquear luz  y tamiz deslizable para difuminar la luz ,aire acondicionado , baño y kitchenette.</p>

                                <p className="text-lg md:text-2xl mb-4">El estudio 2 es el primer skylight del país , basado en los primeros estudios fotográficos de el siglo XIX donde se hacía techo y pared vidriada con la opción de poder controlar la luz natural .</p>
                                <p className="text-lg md:text-2xl mb-16">lo que lo hace ideal para la naturalidad de las tomas , para fotografía analógica, grabado de contenido y backstage .
                                </p>

                                <h3 className="text-4xl md:text-6xl mb-4">Equipos</h3>
                                <ul className="list-disc text-lg md:text-2xl grid grid-cols-2 md:grid-cols-4 gap-2 gap-x-16 mb-16">
                                    <li>Tripodes</li>
                                    <li>boom</li>
                                    <li>tamiz</li>
                                    <li>banderas</li>
                                    <li>difusiones</li>
                                    <li>3 medidas</li>
                                    <li>rotulas</li>
                                    <li>pinzas</li>
                                    <li>alargues</li>
                                </ul>

                                <h3 className="text-4xl md:text-6xl mb-4">Equipamiento</h3>
                                <ul className="list-disc text-lg md:text-2xl grid grid-cols-2 md:grid-cols-4 gap-2 gap-x-16 mb-16">
                                    <li>elevador</li>
                                    <li>mesas</li>
                                    <li>sillas</li>
                                    <li>heladera</li>
                                    <li>mesa de maquillaje</li>
                                    <li>cafetera</li>
                                    <li>microondas</li>
                                    <li>plancha a vapor</li>
                                </ul>

                                <h3 className="text-4xl md:text-6xl mb-4">Área común</h3>
                                <ul className="list-disc text-lg md:text-2xl grid md:grid-cols-2 gap-2 gap-x-16 mb-16">
                                    <li>Entrada vehicular</li>
                                    <li>Patio abierto con opción de cerrado</li>
                                    <li>Posibilidad de armado de mesas para comer</li>
                                    <li>Mesa de Ping pong</li>
                                </ul>
                                <div>
                                    <button
                                        className="black button-large flex items-center gap-3 text-white rounded-full px-4 py-4 mb-1 mx-auto bg-black hover:bg-green-700"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const phoneNumber = "+59891068840"; // e.g., "1234567890"
                                            const draftMessage = [
                                                "Hola, me gustaría reservar el *Estudio Chico:*",
                                                "¿Podrían confirmarme la disponibilidad?"
                                            ].join('\n');
                                            const encodedMessage = encodeURIComponent(draftMessage);
                                            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                                            window.open(whatsappUrl, "_blank");

                                        }}
                                    ><span className='text-xs md:text-lg'>Solicitud Estudio por WhatsApp</span> <WhatsappIcon /></button>
                                    <p className="italic text-xs text-center">Se abrirá WhatsApp con tu selección prellenada.</p>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={"/_studio-03.jpg"}
                                    alt={""}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* <div className="container mx-auto px-4 mb-8">
                    <div className="gallery grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
                        {page[0].galleryImages.map((image) => (
                            <Image
                                key={image._key}
                                width={1024}
                                height={1024}
                                src={image.asset.url}
                                alt={`Gallery Image ${image._key}`}
                                className={`w-full h-dvw md:h-full object-cover ${image.width === 4 ? "md:col-span-4" : image.width === 8 ? "md:col-span-8" : "md:col-span-12"}`}
                            />
                        ))}
                    </div>
                </div> */}

            </div>
            <div className="bg-gray-100 pt-16">
                <Map />
            </div>
        </CursorFollowWrapper>
    );
}
