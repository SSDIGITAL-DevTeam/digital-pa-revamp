import { JSX } from 'react'
import ContactForm from './_components/ContactForm'

export default function ContactUs(): JSX.Element {
    return (
        <main>
            <header className='container p-6 lg:p-8 flex flex-col justify-center md:items-center mt-16'>
                <h1 className='text-2xl uppercase tracking-widest text-primary'>
                    Say Hello
                </h1>

                <h2 className='mt-4 text-3xl font-normal uppercase'>
                    We&apos;d Love to Hear from You. Let&apos;s Get in Touch.
                </h2>
            </header>
            {/* <header className='container p-6 lg:p-8'>
                <h1 className='text-2xl uppercase tracking-widest text-primary'>
                    Say Hello
                </h1>

                <h2 className='mt-4 text-3xl font-normal uppercase'>
                    We&apos;d Love to Hear from You. Let&apos;s Get in Touch.
                </h2>
            </header> */}

            {/* contact form section */}
            <section className='pb-8'>
                <div className='container p-6 lg:p-8'>
                    <div className='flex flex-col gap-6 lg:flex-row lg:gap-8'>
                        <div className='w-full flex justify-center items-center'>
                            <ContactForm />
                        </div>

                        {/* contact information wrapper */}
                        {/* <div className='mt-8 flex flex-col gap-6 lg:mt-0 lg:w-1/3 lg:gap-8'>
                            <div>
                                <p className='font-heading text-xl font-semibold'>
                                    Email
                                </p>

                                <a
                                    className='text-lg'
                                    href='mailto:wow@digital-pa.com.sg'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    wow@digital-pa.com.sg
                                </a>
                            </div>

                            <div>
                                <p className='font-heading text-xl font-semibold'>
                                    Visit Us
                                </p>

                                <address className='text-lg not-italic'>
                                    1100 Lower Delta Rd #02-02B EPL Building
                                    Singapore 169206
                                </address>
                            </div>
                        </div> */}
                        {/* end of contact information wrapper */}
                    </div>
                </div>
            </section>
            {/* end of contact form section */}

            {/* location form section */}
            {/* <section className='py-8'>
                <div className='container p-6 lg:p-8'>
                    <iframe
                        className='w-full rounded-lg'
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.822070824553!2d103.82021648100643!3d1.2804250726892978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da197d54065a13%3A0xceac47e82adb29de!2sEpl%20Building!5e0!3m2!1sen!2sen!4v1693277497904!5m2!1sen!2sen'
                        height='550'
                        loading='lazy'
                    ></iframe>
                </div>
            </section> */}
            {/* end of location form section */}
        </main>
    )
}
