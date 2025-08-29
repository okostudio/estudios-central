"use client"

import CursorFollowWrapper from "@/components/common/CursorFollowWrapper";
import { WhatsappIcon } from "@/components/icons/icons";
import Map from "@/components/partials/Map";
import useDeviceDetection from "@/libs/hooks/useDeviceDetection";
import { Page } from "@/types/Page";

type EstudiosComponentProps = {
    page: Page[];
};

export default function FaqComponent({
    page,
}: EstudiosComponentProps) {
    const isMobile = useDeviceDetection();
    // const chicoRef = useRef<HTMLDivElement>(null);

    return (
        <CursorFollowWrapper>
            <div className="mx-auto ">
                <section className="intro px-8">
                    <div className="container mx-auto py-24 pt-36">
                        <h1 className="text-5xl md:text-7xl mb-8">Preguntas frecuentes</h1>
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                            {/* intro */}
                            <div className="pb-8">
                                <p className="text-lg md:text-2xl mb-4">Consultá las dudas más comunes o ponete en contacto con nosotros por WhatsApp para asistencia personalizada.</p>
                                <button
                                    className="black flex items-center gap-3 text-white rounded-2 px-4 py-4 mb-1 bg-black hover:bg-green-700"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const phoneNumber = "+59891068840"; // e.g., "1234567890"
                                        const draftMessage = [
                                            ""
                                        ].join('\n');
                                        const encodedMessage = encodeURIComponent(draftMessage);
                                        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                                        window.open(whatsappUrl, "_blank");

                                    }}
                                ><span className='text-xs md:text-lg'>Consulta por WhatsApp</span> <WhatsappIcon /></button>
                            </div>

                            <div>
                                <ul className="text-lg md:text-2xl">
                                    <li className="text-red-500 font-bold">FUNCIONAMIENTO PARA HACER...</li>
                                    <li>¿Cómo reservo un estudio?</li>
                                    <li>¿Qué incluye el alquiler del estudio?</li>
                                    <li>¿Puedo visitar el estudio antes de reservar?</li>
                                    <li>¿Cómo se realiza el pago del alquiler?</li>
                                    <li>¿El alquiler de equipos incluye asistencia técnica?</li>
                                    <li>¿Qué pasa si necesito cancelar una reserva?</li>
                                </ul>
                            </div>
                            {/* FAQ List */}
                        </div>
                    </div>
                </section>
            </div>
            <Map />
        </CursorFollowWrapper>
    );
}
