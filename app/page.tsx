"use client";
import Stack from "./components/stack";
import Image from "next/image";
import profile from "../public/profile.jpg";
import { useEffect, useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  // const [animGraphs, setAnimGraphs] = useState(false);
  // const GRAPH_CICLE = 8000;

  const sequence = [
    [6, 1, 5, 1],
    [5, 1, 3, 1],
    [3, 1, 7, 1]
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const sequence = [
      { value: 0, duration: 10000 },
      { value: 1, duration: 1500 },
      { value: 2, duration: 10000 },
      { value: 3, duration: 1500 },
    ];

    let index = 0;
    let timeout: NodeJS.Timeout;

    const next = () => {
      const current = sequence[index];

      setCurrent(current.value);

      index = (index + 1) % sequence.length;

      timeout = setTimeout(next, current.duration);
    };

    next();

    return () => clearTimeout(timeout);
  }, []);


  // useEffect(() => {
  //   let index = 0;

  //   const interval = setInterval(() => {
  //     index = (index + 1) % sequence.length;
  //     setSize(sequence[index]);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    Promise.all([
      document.fonts.ready,
      new Promise<void>((resolve) => {
        if (document.readyState === "complete") {
          resolve();
        } else {
          window.addEventListener("load", () => resolve(), { once: true });
        }
      })
    ]).then(() => {
      setTimeout(() => {
        setLoaded(true);
      }, 300);
    });
  }, []);


  // useEffect(() => {
  //   let graph_timeout: NodeJS.Timeout;

  //   const graphAnimation = () => {
  //     setAnimGraphs(false);
  //     setTimeout(() => setAnimGraphs(true), GRAPH_CICLE / 2);

  //     graph_timeout = setTimeout(graphAnimation, GRAPH_CICLE);
  //   };

  //   graphAnimation();

  //   return () => {
  //     clearTimeout(graph_timeout);
  //   }
  // }, []);

  return (
    <div className="text-sm min-h-screen font-sans w-full relative overflow-hidden">
      <nav className="w-full absolute">
        <div className="w-[95%] h-15 mx-auto px-4 my-2 flex justify-between">
          <div className="h-13 my-auto border rounded-full bg-zinc-50 border-zinc-50 w-13 items-center select-none text-center text-background text-4xl font-serif font-bold underline underline-offset-2">
            ƒ
          </div>
          <div className="flex items-center  justify-center">
            <span className="flex font-literata ml-5 px-2 text-neutral-400 text-[14px] border-neutral-700">
              <svg xmlns="http://www.w3.org/2000/svg"
                width="18" height="18"
                viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-map-pin-icon lucide-map-pin"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Antioquia, Colombia</span>
          </div>
          <div className="flex flex-1 justify-end">
            <div className="text-neutral-200 items-center flex w-xl text-lg select-none font-console justify-end [&>span]:hover:underline">
              {/* <span className="max-w-fit cursor-pointer h-fit">{"Proyectos"}</span>
              <span className="max-w-fit cursor-pointer h-fit">{"Historia"}</span>
              <span className="max-w-fit cursor-pointer h-fit">{"About"}</span> */}
              <div className="h-full content-center">
                {/* <button
                  className="text-base px-3 py-2 border rounded-2xl border-zinc-50 font-semibold cursor-pointer bg-zinc-900 hover:bg-zinc-50 hover:text-zinc-900 transition-all delay-200 ease-in-out shadow-solid-5/5"
                >
                  <span className="font-bold mr-1">{"-> "}</span>
                  <span className="">
                    Contact Me
                  </span>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="h-svh pt-12 px-10 border-zinc-800 flex">

        {/* ebox-25/[#181818] ebox-line-neutral-100 */}
        {/* <div className="h-full content-center ml-5">
          <div className="h-1/2 w-96 relative overflow-hidden border border-amber-50 shadow-solid-15/15 shadow-zinc-200">
            <span className="text-amber-50 -mx-2 text-5xl font-bold w-fit h-fit tracking-tight rotate-90 inline-block origin-bottom-left">
              Fullstack
            </span>
          </div>
        </div> */}

        <div className="content-center flex w-full h-full">
          {/* <div className="absolute top-0 right-0 bg-yellow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="480" height="480"
              viewBox="0 0 24 24"
              color="#222222"
              fill="#222222" stroke="currentColor" strokeWidth="0.2"
              strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-pentagon-icon lucide-pentagon -rotate-45 origin-center bg-neutral-"
            >
              <path d="M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z" />
            </svg>
          </div> */}
          {/* <Image src={sphere} alt="" width={400} height={400} className="absolute invert opacity-100 -z-10 hue-rotate-90 mask-radial-at-center mask-radial-from-0% mask-radial-to-100%"></Image> */}


          {/* <div className="[&>div]:border-orange-400 [&>div]:border bg-background [&>div]:rounded-full [&>div]:size-7 [&>div]:shadow-solid-4/4 [&>div]:shadow-orange-700 [&>div]:my-8 absolute">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div> */}

          <div className="flex-1 h-full content-center px-20">
            <div className="font-heading-now-medium tracking-wide text-[110px] mb-18 w-fit flex flex-col items-start">
              {/* <div className="absolute h-full w-px border-[rgb(255,255,255,0.1)] -top-4 -left-5 border-l border-dashed"></div> */}
              <h1 className="font-bold leading-14">
                {"FULL-STACK"}
              </h1>
              <h1 className="text-[78px] font-bold ml-5">
                DEVELOPER
                <span className="font-normal font-heading-now-small text-5xl">
                  {/* <span className="font-normal text-4xl">Machine Learning</span> */}
                  <span className="text-4xl mr-2">{" &"}</span>
                  DATA ANALIST
                </span>
              </h1>

            </div>

            <div className="w-full flex h-fit">
              {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="240" height="240"
                  viewBox="0 0 24 24"
                  fill="none" stroke="#404040" strokeWidth="0.2"
                  strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-pentagon-icon lucide-pentagon -top-4 absolute right-1 rotate-45 origin-center"
                >
                  <path d="M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z" />
                </svg> */}
              <div className="pl-4 py-3 font-literata rounded-4xl bg-background text-zinc-300 text-[16px] font-light w-4/5 ml-4">

                <div className="float-left mr-4 relative">
                  <Image className="rounded-full w-14 h-14" src={profile} alt={"Profile image from github"} />
                  <div className="absolute -z-10 w-53 h-53 border-r-0 rounded-l-full border-dashed border border-[rgb(255,255,255,0.1)] -top-12 -left-25">
                    {/* <div
                      className="origin-bottom-right absolute z-10 -top-14 -left-10 w-24 h-30 rounded-br-full border-dashed border-b border-r border-[rgb(255,255,255,0.1)]"
                    ></div> */}
                  </div>


                  <div className="border bg-background group hover:bg-zinc-300 hover:text-background border-zinc-300 text-lg absolute text-nowrap left-[100%] text-inherit -top-[105%] px-1.5 py-2 rounded-2xl select-none cursor-pointer">
                    <div className="w-3.5 h-5 absolute -left-[6px] -bottom-[13px] origin-center rotate-40">
                      <svg
                        className="z-10 absolute group-hover:text-zinc-300"
                        width="100%"
                        height="100%"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M 0 0 L 50 100 L 100 0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                      <svg
                        className="group-hover:text-zinc-300 absolute text-background"
                        width="100%"
                        height="100%"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M 0 0 L 50 100 L 100 0"
                          fill="currentColor"
                          stroke="none"
                          strokeWidth="0"
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                    </div>
                    Hola! Mi nombre es Joshua
                  </div>
                </div>

                <br />Desarrollador de <span className="underline">software</span> y <span className="underline">fullstack</span> freelancer, experimentado y apasionado en crear, inventar
                y romper estandares. Imparable creativo y amante de los videojuegos, la literatura, artes visuales y la musica.
              </div>
            </div>
          </div>

          <div className="h-full flex-1 relative">
            <div className="left-1/2 bottom-[176px] face front origin-center isobox-z-313 isobox-y-313 rotate-60">

              <div className="fadeout-horizontal-15 h-[313px] w-[313px] absolute">
                <div
                  className="fadeout-vertical-15 h-full w-full"
                  style={{
                    backgroundSize: "24px 24px",
                    backgroundImage: `
                  linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
                  `,
                  }}>
                  <div className="h-2/3 w-2/3 top-1/6 left-1/6 rounded-full border-dashed border border-[rgb(255,255,255,0.15)] absolute"></div>
                </div>
              </div>

              <div className="h-[313px] w-[313px] relative">

                {/* BOX 1 */}
                <div
                  className={`[&>div]:bg-background [&>div]:duration-800 [&>div>div]:duration-800 [&>div>div]:transition-all select-none cursor-pointer 
iso-coords-x-3 iso-coords-y-5 iso-normal iso-grid-size-24 transition-all [&>div]:transition-all duration-800 absolute [&>div>div]:border-2 ease-in-out 
iso-isobox-z-1 iso-isobox-y-1`}
                  style={{ "--x-size": sequence[0][current] } as React.CSSProperties}
                >
                  <div className="face iso-top">
                    <div className={`w-full h-full text-center opacity-60 ${sequence[0][current] === 1 ?
                      "bg-amber-50" : sequence[0][current] === sequence[0][0] ?
                        "border-red-500" : "border-cyan-500"}`}>
                    </div>
                  </div>
                  <div className="face iso-side">
                    <div className={`w-full h-full text-center opacity-60 [writing-mode:vertical-lr] text-[18px] font-bold ${sequence[0][current] === 1 ?
                      "bg-amber-50 text-transparent" : sequence[0][current] === sequence[0][0] ?
                        "text-red-300 border-red-400" : "text-cyan-200 border-cyan-400"}`}>
                      {current === 0 || current === 1 ? "Java" : "React"}
                    </div>
                  </div>
                  <div className="face iso-front">
                    <div className={`w-full h-full text-center opacity-60 ${sequence[0][current] === 1 ?
                      "bg-amber-50" : sequence[0][current] === sequence[0][0] ?
                        "border-red-300" : "border-cyan-300"}`}>
                    </div>
                  </div>
                </div>

                {/* BOX 2 */}
                <div className={`[&>div]:bg-background select-none cursor-pointer iso-coords-x-6 iso-coords-y-5 iso-normal iso-grid-size-24 transition-all 
[&>div]:transition-all [&>div]:duration-800 duration-800 absolute [&>div>div]:border-2 iso-isobox-z-1 iso-isobox-y-1 iso-isobox-x-3 [&>div>div]:duration-800 
[&>div>div]:transition-all`}
                  style={{ "--x-size": sequence[1][current] } as React.CSSProperties}
                >
                  <div className="face iso-top">
                    <div className={`w-full h-full text-center opacity-60 ${sequence[1][current] === 1 ?
                      "border-amber-50" : sequence[1][current] === sequence[1][0] ?
                        "border-amber-400" : "border-pink-500"}`}>
                    </div>
                  </div>
                  <div className="face iso-side">
                    <div className={`w-full h-full text-center opacity-60 [writing-mode:vertical-lr] text-[18px] font-bold ${sequence[1][current] === 1 ?
                      "border-amber-50 text-transparent" : sequence[1][current] === sequence[1][0] ?
                        "text-amber-300 border-amber-300" : "text-pink-200 border-pink-400"}`}>
                      {current === 0 || current === 1 ? "Redux" : "CSS"}
                    </div>
                  </div>
                  <div className="face iso-front">
                    <div className={`w-full h-full text-center opacity-60 ${sequence[1][current] === 1 ?
                      "border-amber-50" : sequence[1][current] === sequence[1][0] ?
                        "border-amber-200" : "border-pink-300"}`}>
                    </div>
                  </div>
                </div>

                {/* BOX 3 */}
                <div className={`[&>div]:bg-background select-none cursor-pointer iso-coords-x-9 iso-coords-y-5 iso-normal iso-grid-size-24 transition-all 
[&>div]:transition-all [&>div]:duration-800 duration-800 absolute [&>div>div]:border-2 iso-isobox-z-1 iso-isobox-y-1 iso-isobox-x-6
[&>div>div]:duration-800 [&>div>div]:transition-all`}
                  style={{ "--x-size": sequence[2][current] } as React.CSSProperties}
                >
                  <div className="face iso-top">
                    <div className={`w-full h-full text-center opacity-60 ${sequence[2][current] === 1 ?
                      "bg-amber-50" : sequence[2][current] === sequence[2][0] ?
                        "border-lime-600" : "border-yellow-400"}`}>
                    </div>
                  </div>
                  <div className="face iso-side">
                    <div className={`w-full h-full text-center opacity-60 [writing-mode:vertical-lr] text-[18px] font-bold ${sequence[2][current] === 1 ?
                      "bg-amber-50 text-transparent" : sequence[2][current] === sequence[2][0] ?
                        "text-lime-300 border-lime-500" : "text-yellow-200 border-yellow-300"}`}>
                      {current === 0 || current === 1 ? "SQL" : "Typescript"}
                    </div>
                  </div>
                  <div className="face iso-front">
                    <div className={`w-full h-full text-center opacity-60 ${sequence[2][current] === 1 ?
                      "bg-amber-50" : sequence[2][current] === sequence[2][0] ?
                        "border-lime-400" : "border-yellow-200"}`}>
                    </div>
                  </div>
                </div>


                {/* NODELINKS */}
                <div className="iso-grid-size-24">
                  <div className={`transition-colors duration-800 border-dashed opacity-60 border-b border-r w-18 h-24 absolute z-40 plane-coords-x-0 
plane-coords-y-6 rounded-br-full ${sequence[0][current] === 1 ?
                      "border-amber-50" : sequence[0][current] === sequence[0][0] ?
                        "border-red-400" : "border-cyan-300"}`}>
                    <div className="origin-center absolute bottom-full right-0 text-nowrap text-xs">
                      50626 lines
                    </div>
                  </div>

                  <div className={`transition-colors duration-800 border-dashed opacity-60 border-b border-r w-[72px] h-6 absolute z-40 plane-coords-x-6 
plane-coords-y-6 rounded-br-full ${sequence[1][current] === 1 ?
                      "border-amber-50" : sequence[1][current] === sequence[1][0] ?
                        "border-amber-400" : "border-pink-300"}`}>
                    <div className={`transition-colors duration-800 border-dashed border-t border-l h-6 w-[96px] absolute bottom-full left-full rounded-tl-full 
${sequence[1][current] === 1 ?
                        "border-amber-50" : sequence[1][current] === sequence[1][0] ?
                          "border-amber-400" : "border-pink-300"
                      }`}>
                      <div className="origin-center absolute bottom-full left-full -rotate-90">
                        21048
                      </div>
                    </div>
                  </div>

                  <div className={`transition-colors duration-800 border-dashed opacity-60 border-t border-r w-12 h-20 absolute z-40 plane-coords-x-10 
plane-coords-y-6 rounded-tr-full ${sequence[2][current] === 1 ?
                      "border-amber-50" : sequence[2][current] === sequence[2][0] ?
                        "border-lime-400" : "border-yellow-400"
                    }`}>
                    <div className="absolute top-full left-full text-xs">
                      1291048
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="h-full">
              {/* <div className="flex w-full justify-end">
                <div className="relative font-heading-now-small text-4xl fadeout-horizontal-5 w-1/2 overflow-clip h-15 text-neutral-400">
                  <div className="marquee-track-x flex transition-all absolute border-y border-neutral-700 pl-1 gap-2 w-full">
                    <p>
                      DATA ANALISIS
                    </p>
                    <p>
                      API SERVICE
                    </p>
                    <p>
                      SPRINGBOOT
                    </p>
                    <p>
                      REACT
                    </p>
                    <p>
                      REDUX
                    </p>
                    <p>
                      TYPESCRIPT
                    </p>

                    <p aria-hidden>
                      DATA ANALISIS
                    </p>
                    <p aria-hidden>
                      API SERVICE
                    </p>
                    <p aria-hidden>
                      SPRINGBOOT
                    </p>
                    <p aria-hidden>
                      REACT
                    </p>
                    <p aria-hidden>
                      REDUX
                    </p>
                    <p aria-hidden>
                      TYPESCRIPT
                    </p>
                  </div>
                </div>
              </div> */}

              <div className="w-full flex justify-end">
                <div className="cursor-pointer text-4xl transition-all duration-700 delay-100 relative font-heading-now-medium text-background mr-5 h-fit px-1.5 hover:text-neutral-300 hover:[&>div]:rounded-bl-3xl hover:[&>div>div]:duration-700! hover:[&>div]:duration-700! hover:[&>div]:rotate-45 hover:[&>div]:size-7 hover:[&>div]:-left-10 hover:[&>div]:top-1/4 hover:[&>div>div]:opacity-100">
                  <span className="animate-underline overflow-hidden relative after:bg-neutral-300 after:duration-700 after:delay-200">
                    Contacto
                  </span>
                  <div className="absolute w-full h-full bg-neutral-300 top-0 left-0 transition-all duration-700 delay-100 -z-10">
                    <div className="absolute w-3/4 h-3/4 -bottom-px -left-px transition-all duration-300 opacity-0 border-neutral-300 bg-background"></div>
                  </div>
                </div>
                <div className="mr-5 circular-8 relative">
                  <div className="absolute w-full h-[calc(100%-4px)] top-0.5 circular-9 -z-10"></div>
                  <div className="text-4xl font-heading-now-medium pb-1 text-neutral-300 z-30">
                    <span className="font-literata px-2 text-3xl border-neutral-600">+1</span>Año de experiencia
                  </div>
                  {/* <div className="border-neutral-700 border-r h-[270%] w-3/4 mt-0 font-literata grid grid-rows-3 items-center justify-items-end">
                  </div> */}
                </div>
              </div>

              {/* <div className="size-16 spiked-box"></div> */}

            </div>

          </div>
          {/* <div className="bg-orange-400 size-96 mask-[radial-gradient(circle,rgba(255,255,255,0.2)_0%,transparent_60%)] skew-12"></div> */}
        </div >

      </main >

      <main className="h-svh px-10">

        {/* <div className="flex items-center">
          <div className="w-1/2">
            <div className="overflow-clip fadeout-horizontal-25 text-4xl">
              <div className="marquee-track-x pl-2 flex gap-2 font-heading-now-medium">
                <p>JavaScript</p>
                <p>TypeScript</p>
                <p>CSS</p>
                <p>TailwindCSS</p>
                <p>Accessibility</p>
                <p>React</p>
                <p aria-hidden="true">JavaScript</p>
                <p aria-hidden="true">TypeScript</p>
                <p aria-hidden="true">CSS</p>
                <p aria-hidden="true">TailwindCSS</p>
                <p aria-hidden="true">Accessibility</p>
                <p aria-hidden="true">React</p>
              </div>
            </div>
          </div>
        </div> */}

        <Stack></Stack>
      </main>

      {/* <div
        className={`bg-amber-400 border [&::before]:border [&::before]:border-neutral-100 ebox-25/amber-600 ebox-line-neutral-100 relative h-24 border-neutral-100 w-24 ebox-re-perspective-1/5000`}
      >
      </div> */}
      {/* [writing-mode:vertical-lr] */}

    </div >
  );
}


//             <div className="relative">
//               <div className="absolute -z-10 w-[200px] h-[150px]">
//                 <svg className="absolute -left-1/2 -top-1/2 content-center" viewBox="0 0 200 150" width="200" height="150" xmlns="http://www.w3.org/2000/svg">
//                   <polygon
//                     fill="none"
//                     stroke="#707070"
//                     strokeWidth="2"
//                     points="
//   100,10
//   109,40
//   139,19
//   123,50
//   165,45
//   135,65
//   175,74
//   135,83
//   165,106
//   123,101
//   139,132
//   109,111
//   100,141
//   91,111
//   61,132
//   77,101
//   35,106
//   65,83
//   20,74
//   65,65
//   35,45
//   77,50
//   61,19
//   91,40
// "
//                   />
//                 </svg>
//               </div>
//             </div>