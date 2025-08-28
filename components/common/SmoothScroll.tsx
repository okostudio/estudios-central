"use client"
import gsap from 'gsap'
import { ReactLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'
import type { LenisRef } from 'lenis/react'

type SmoothScrollProps = {
    paused?: boolean;
};

const SmoothScroll = ({ paused = false }: SmoothScrollProps) => {
    const lenisRef = useRef<LenisRef | null>(null);

    useEffect(() => {
        function update(time: number) {
            lenisRef.current?.lenis?.raf(time * 500)
        }

        gsap.ticker.add(update)

        return () => gsap.ticker.remove(update)
    }, [])

    // Pause/resume Lenis when prop changes
    useEffect(() => {
        if (lenisRef.current?.lenis) {
            if (paused) {
                lenisRef.current.lenis.stop();
            } else {
                lenisRef.current.lenis.start();
            }
        }
    }, [paused]);

    return (
        <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
    )
}

export default SmoothScroll