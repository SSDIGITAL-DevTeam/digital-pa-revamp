// // 'use client';

// // import { useEffect } from 'react';
// // import LocomotiveScroll from 'locomotive-scroll';

// // const useLocoScroll = () => {
// //   useEffect(() => {
// //     const scrollContainer = document.querySelector('[data-scroll-container]');
// //     if (!scrollContainer) return;

// //     const scroll = new LocomotiveScroll({
// //       el: scrollContainer as HTMLElement,
// //       smooth: true,
// //       lerp: 0.1,
// //       getDirection: true,
// //     });

// //     // update posisi scroll ketika window resize
// //     const handleResize = () => {
// //       scroll.update();
// //     };
// //     window.addEventListener('resize', handleResize);

// //     return () => {
// //       scroll.destroy();
// //       window.removeEventListener('resize', handleResize);
// //     };
// //   }, []);
// // };

// // export default useLocoScroll;



// // useLocoScroll.ts
// import { useEffect } from "react";
// import LocomotiveScroll from "locomotive-scroll";

// export const useLocoScroll = (scrollRef: React.RefObject<HTMLElement>) => {
//   useEffect(() => {
//     if (!scrollRef.current) return;

//     const scrollInstance = new LocomotiveScroll({
//       el: scrollRef.current,
//       smooth: true,
//       lerp: 0.08,
//       getDirection: true,
//     });

//     const handleResize = () => {
//       scrollInstance.update();
//     };

//     window.addEventListener('resize', handleResize);

//     // return () => {
//     //   scrollInstance.destroy();
//     //   window.removeEventListener('resize', handleResize);
//     // };
//   }, [scrollRef]);
// };

// hooks/useLocoScroll.js
// 'use client'
// import { useEffect } from 'react';
// import LocomotiveScroll from 'locomotive-scroll';

// const useLocoScroll = () => {
//   useEffect(() => {
//     const scrollEl = document.querySelector('[data-scroll-container]');
//     const scroll = new LocomotiveScroll({
//       el: scrollEl as HTMLElement,
//       smooth: true,
//       lerp: 0.1,
//     });

//     return () => {
//       if (scroll) scroll.destroy();
//     };
//   }, []);
// };

// export default useLocoScroll;

import { useEffect } from 'react';

const useLocoScroll = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let scroll: any;

    import('locomotive-scroll').then((LocomotiveScrollModule) => {
      const scrollEl = document.querySelector('[data-scroll-container]');
      if (!scrollEl) return;

      scroll = new LocomotiveScrollModule.default({
        el: scrollEl as HTMLElement,
        smooth: true,
        lerp: 0.1,
      });
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);
};

export default useLocoScroll;

