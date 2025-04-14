'use client'

import { JSX } from 'react'
import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
// import type { Container } from '@tsparticles/engine'
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from '@tsparticles/slim' // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { basicConfig } from '@/config/particleConfig'
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

export default function Particle(): JSX.Element {
    const [init, setInit] = useState(false)

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine)
            //await loadBasic(engine);
        }).then(() => {
            setInit(true)
        })
    }, [])

    // const particlesLoaded = useCallback(
    //     async (container: Container | undefined): Promise<void> => {},
    //     [],
    // )

    return (
        <>
            {init && (
                <Particles
                    className='h-full w-full'
                    id='tsparticles'
                    // particlesLoaded={particlesLoaded}
                    options={{ ...basicConfig }}
                />
            )}
        </>
    )
}
