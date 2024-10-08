'use client'
import Arrow from "../../../../public/images/Arrow_Right.svg"
import Image from "next/image";
import { useEffect, useRef } from "react";
import {
    useMotionTemplate,
    useMotionValue,
    motion,
    animate, 
    useScroll,
    useTransform, 
  } from "framer-motion";
import { signIn } from "next-auth/react";
  
  const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#18D860"];
  
  export const AuroraHero = () => {
    const color = useMotionValue(COLORS_TOP[0]);
  
    useEffect(() => {
      animate(color, COLORS_TOP, {
        ease: "easeInOut",
        duration: 10,
        repeat: Infinity,
        repeatType: "mirror",
      });
    }, [color]);

    const ref = useRef(null)
    const {scrollYProgress} = useScroll(ref)
    const fadeProgress = useTransform(scrollYProgress, [0, 1], [1, 0])
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 0.8])
    const blurProgress = useTransform(scrollYProgress, [0, 1], ['blur(0rem)', "blur(2rem)"])
  
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000000 50%, ${color})`;
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  
    return (
      <motion.section
        style={{
          backgroundImage,
          opacity: fadeProgress,
          scale: scaleProgress,
          filter: blurProgress,
        }}
        viewport={{margin: '-400px'}}
        ref={ref}
        className="grid min-h-screen place-content-center overflow-hidden bg-[#000000] px-4 py-24 text-gray-200 z-0 sticky top-0 rounded-2xl"
      >
        <div className="relative z-10 flex flex-col items-center">
          <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
            Beta Now Live!
          </span>
          <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
            Welcome to <a className=" font-Monoton text-[#18D860]">
                Octagroove
                </a>
          </h1>
          <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
            An Improved Dashboard For Spotify Users!
          </p>
          <motion.button
            style={{
              border,
              boxShadow,
            }}
            whileHover={{
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.985,
            }}
            className=" h-14 group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
            onClick={()=> signIn('spotify', {redirectTo: "/dashboard/range_short"})}
          >
            Try It Now
            <Image src={Arrow} alt={"arrow"} className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
          </motion.button>
        </div>
  
        <div className="absolute\ inset-0 z-0">
        </div>
      </motion.section>
    );
  };
  