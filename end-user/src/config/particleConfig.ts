import { IOptions, RecursivePartial } from '@tsparticles/engine'

export const basicConfig: RecursivePartial<IOptions> | undefined = {
    fullScreen: {
        enable: false,
    },
    background: {},
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: false,
                mode: 'push',
            },
            onHover: {
                enable: false,
                mode: 'repulse',
            },
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: '#DB1222',
        },
        links: {
            color: '#DB1222',
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 2,
        },
        move: {
            direction: 'outside',
            enable: true,
            outModes: {
                default: 'bounce',
            },
            random: false,
            speed: 3,
            straight: false,
        },
        number: {
            density: {
                enable: true,
            },
            value: 100,
        },
        opacity: {
            value: 0.2,
        },
        shape: {
            type: 'square',
        },
        size: {
            value: { min: 2, max: 10 },
        },
    },
    detectRetina: true,
}
