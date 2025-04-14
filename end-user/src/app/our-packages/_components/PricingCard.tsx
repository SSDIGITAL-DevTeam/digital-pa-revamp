'use client'

import { JSX } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Link,
    Button,
    cn,
} from '@nextui-org/react'
import { Package } from '@/constants/our-packages/package'

type Props = {
    singlePackage: Package
}

export default function PricingCard({ singlePackage }: Props): JSX.Element {
    return (
        <Card
            className={cn(
                {
                    'relative z-10 bg-primary text-light lg:scale-110':
                        singlePackage.is_highlighted,
                },
                'w-max-lg h-full p-4',
            )}
        >
            <CardHeader className='p-6 lg:p-8'>
                <header className='flex w-full flex-col items-center justify-center gap-y-6 text-center text-primary md:gap-y-10'>
                    <h2
                        // className='text-xl  md:text-3xl'
                        className={cn(
                            {
                                'text-white': singlePackage.is_highlighted,
                            },
                            'text-xl md:text-3xl',
                        )}
                    >
                        {singlePackage.name}
                    </h2>
                    <Button
                        disabled
                        color='primary'
                        radius='sm'
                        size='lg'
                        className={cn(
                            {
                                'bg-white text-primary':
                                    singlePackage.is_highlighted,
                            },
                            'font-bold',
                        )}
                    >
                        Suitable for
                    </Button>
                </header>
            </CardHeader>

            <CardBody className='p-6 lg:p-8'>
                <div>
                    <p
                        className='text-center font-medium md:text-lg lg:text-xl'
                        dangerouslySetInnerHTML={{
                            __html: singlePackage.description,
                        }}
                    ></p>
                </div>
            </CardBody>

            <CardFooter className='p-4 lg:p-8'>
                <Button
                    // className='mx-auto px-4 text-sm font-semibold text-light md:px-12 md:text-base'
                    className={cn(
                        {
                            'bg-white text-primary':
                                singlePackage.is_highlighted,
                        },
                        'mx-auto px-4 text-sm font-bold lg:px-12 lg:text-base',
                    )}
                    as={Link}
                    size='lg'
                    href={singlePackage.link}
                    target='_blank'
                    radius='full'
                    color='primary'
                >
                    {singlePackage.cta}
                </Button>
            </CardFooter>
        </Card>
    )
}
