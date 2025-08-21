"use client"
import gsap from 'gsap'
import { ReactLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'
import type { LenisRef } from 'lenis/react'


const SmoothScroll = () => {
    const lenisRef = useRef<LenisRef | null>(null);

    useEffect(() => {
        function update(time: number) {
            lenisRef.current?.lenis?.raf(time * 500)
        }

        gsap.ticker.add(update)

        return () => gsap.ticker.remove(update)
    }, [])

    return (
        <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
    )
}

export default SmoothScroll
