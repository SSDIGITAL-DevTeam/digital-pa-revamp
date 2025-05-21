'use client';

// import useLocoScroll from '@/hook/useLocomotive';

export default function HomePage() {
//   useLocoScroll();

  return (
    <main
      data-scroll-container
      className="relative w-full text-white bg-black"
    >
      <section
        data-scroll-section
        className="min-h-screen flex items-center justify-center bg-red-500"
      >
        <h1 data-scroll data-scroll-speed="2" className="text-4xl font-bold">
          Section 1
        </h1>
      </section>
      <section
        data-scroll-section
        className="min-h-screen flex items-center justify-center bg-green-500"
      >
        <h2 data-scroll data-scroll-speed="3" className="text-3xl font-semibold">
          Section 2
        </h2>
      </section>
      <section
        data-scroll-section
        className="min-h-screen flex items-center justify-center bg-blue-500"
      >
        <p data-scroll data-scroll-speed="1" className="text-xl">
          Section 3
        </p>
      </section>
    </main>
  );
}
