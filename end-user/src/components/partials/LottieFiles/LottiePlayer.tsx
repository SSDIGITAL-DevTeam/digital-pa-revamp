// 'use client'

// import { Controls, Player } from '@lottiefiles/react-lottie-player'
// import { JSX } from 'react'
// import { useMediaQuery } from 'usehooks-ts'

// type Props = {
//     src: string | object
//     height?: number
//     width?: number
// }

// export default function LottiePlayer({
//     src,
//     height = 300,
//     width = 300,
// }: Props): JSX.Element {
//     const isMobile = useMediaQuery('(max-width: 1024px)')

//     return (
//         <Player autoplay={!isMobile} loop src={src} style={{ height, width }}>
//             <Controls visible={false} />
//         </Player>
//     )
// }
'use client'

import { Controls, Player } from '@lottiefiles/react-lottie-player'
import { JSX } from 'react'
import { useMediaQuery } from 'usehooks-ts'

type Props = {
    src: string | object
    height?: number
    width?: number
}

export default function LottiePlayer({
    src,
    height = 300,
    width = 300,
}: Props): JSX.Element {
    const isMobile = useMediaQuery('(max-width: 1024px)')

    return (
        <Player autoplay={!isMobile} loop src={src} style={{ height, width }}>
            <Controls visible={false} />
        </Player>
    )
}
