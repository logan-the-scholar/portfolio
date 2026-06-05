import Stack from "./components/stack";
import Image from "next/image";
import profile from "../public/profile.jpg";

export default function Home() {
  return (
    <div className="text-sm min-h-screen font-sans w-full relative overflow-hidden">
      {/* w-[95%] px-4 mx-auto bg-[#1e1e20] h-15 my-2 */}
      <nav className="w-full absolute">
        <div className="w-[95%] h-15 mx-auto px-4 my-2 flex justify-between">
          <div className="h-13 my-auto border rounded-full bg-zinc-50 border-zinc-50 w-13 items-center select-none text-center text-background text-4xl font-serif font-bold underline underline-offset-2">
            ƒ
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
            {/* <div className="font-extrabold text-9xl col-span-1 w-fit h-fit">*</div> */}
            <div className="font-heading-now-medium tracking-wide text-[110px] mb-18 w-fit flex flex-col items-start">
              <h1 className="font-bold leading-14">
                {"FULL-STACK"}
                {/* <span>{"<"}</span> */}
              </h1>
              <h1 className="text-[78px] font-bold ml-5">
                DEVELOPER
                <span className="font-normal font-heading-now-small text-5xl">
                  {/* <span className="font-normal text-4xl">Machine Learning</span> */}
                  <span className="text-4xl mr-2">{" &"}</span>
                  DATA ANALIST
                  {/* <span className="relative fadeout-horizontal-5 w-full overflow-clip">
                    <span className="marquee-track-x flex transition-all relative pl-1 gap-2 w-full">
                      <p>
                        DATA ANALIST
                      </p>
                      <p>
                        DATA AAAA
                      </p>
                      <p>
                        DATA BBBB
                      </p>
                      <p>
                        DATA CCCC
                      </p>
                      <p>
                        DATA DDDD
                      </p>
                      <p aria-hidden>
                        DATA ANALIST
                      </p>
                      <p aria-hidden>
                        DATA AAAA
                      </p>
                      <p aria-hidden>
                        DATA BBBB
                      </p>
                      <p aria-hidden>
                        DATA CCCC
                      </p>
                      <p aria-hidden>
                        DATA DDDD
                      </p>
                    </span>
                  </span> */}
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
              <div className="pl-4 py-3 font-sans rounded-4xl bg-background text-zinc-300 text-[16px] font-light w-4/5 ml-4">

                <div className="float-left mr-4 relative">
                  <Image className="rounded-full w-14 h-14" src={profile} alt={"Profile image from github"} />
                  <div className="absolute -z-10 w-53 h-53 fadeout-right-50 rounded-l-full border border-[rgb(255,255,255,0.1)] -top-12 -left-25">
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
            {/* <div className="border rounded-bl-full rounded-tr-full border-amber-50"></div> */}
            {/* className={`ebox-5/neutral-800 ebox-line-neutral-500 relative h-full border border-neutral-500 w-full ${perspective === 0 ? "ebox-re-perspective-1/2000" : perspective === 1 ? "ebox-perspective-1/500" : perspective === 2 ? "ebox-re-top-perspective-1/2000" : "ebox-top-perspective-1/500"}`} */}

            {/* <div className="flex justify-center -mt-5"> */}
            <div className="bg-background text-base font-normal text-left content-start col-start-2 col-end-4 -mt-4 mr-7">
              {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, quis aliquid! Suscipit incidunt at maxime
              deserunt. */}
              {/* inventore vero minima aliquid quasi, ullam voluptatem soluta ipsum assumenda vel temporibus nihil iste. */}
            </div>

            {/* <div className="h-1/6 w-full"></div> */}
            {/* </div> */}
          </div>

          <div className="h-full flex-1 relative">
            <div className="left-1/2 bottom-[156px] face front origin-center isobox-z-313 isobox-y-313 rotate-60">
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
                <div className="[&>div]:bg-background select-none cursor-pointer iso-coords-x-3 iso-coords-y-5 iso-normal iso-grid-size-24 transition-all [&>div]:transition-all duration-800 absolute [&>div>div]:border iso-isobox-z-1 iso-isobox-y-1 iso-isobox-x-7">
                  <div className="face iso-top">
                    <div className="w-full h-full text-center border-amber-600 opacity-60"></div>
                  </div>
                  <div className="face iso-side">
                    <div className="w-full h-full text-center text-amber-300 border-amber-500 opacity-60 [writing-mode:vertical-lr] text-[18px] font-bold">Java</div>
                  </div>
                  <div className="face iso-front">
                    <div className="w-full h-full text-center border-amber-400 opacity-60"></div>
                  </div>
                </div>

                {/* BOX 2 */}
                <div className="[&>div]:bg-background select-none cursor-pointer iso-coords-x-6 iso-coords-y-5 iso-normal iso-grid-size-24 transition-all [&>div]:transition-all duration-800 absolute [&>div>div]:border iso-isobox-z-1 iso-isobox-y-1 iso-isobox-x-3">
                  <div className="face iso-top">
                    <div className="w-full h-full text-center border-purple-600 opacity-60"></div>
                  </div>
                  <div className="face iso-side">
                    <div className="w-full h-full text-center text-purple-300 border-purple-500 opacity-60 [writing-mode:vertical-lr] text-[18px] font-bold">CSS</div>
                  </div>
                  <div className="face iso-front">
                    <div className="w-full h-full text-center border-purple-400 opacity-60"></div>
                  </div>
                </div>

                {/* BOX 3 */}
                <div className="[&>div]:bg-background select-none cursor-pointer iso-coords-x-9 iso-coords-y-5 iso-normal iso-grid-size-24 transition-all [&>div]:transition-all [&>div]:duration-800 duration-800 absolute [&>div>div]:border iso-isobox-z-1 iso-isobox-y-1 iso-isobox-x-6">
                  <div className="face iso-top">
                    <div className="w-full h-full text-center border-lime-600 opacity-60"></div>
                  </div>
                  <div className="face iso-side">
                    <div className="w-full h-full text-center text-lime-300 border-lime-500 opacity-60 [writing-mode:vertical-lr] text-[18px] font-bold">Javascript</div>
                  </div>
                  <div className="face iso-front">
                    <div className="w-full h-full text-center border-lime-400 opacity-60"></div>
                  </div>
                  <div className="absolute normal w-5! h-5! bg-amber-600!">o</div>
                </div>
              </div>
            </div>
            {/* <div
              className="left-2/3 -z-10 absolute fadeout-vertical-15 w-full h-full face front origin-center isobox-z-241 isobox-y-697 rotate-60"
            >
              <div className="speed-30 marquee-track-y transition-all relative w-full! h-max!">
                <div
                  className="h-[697px] w-[241px]"
                  style={{
                    backgroundSize: "24px 24px",
                    backgroundImage: `
                  linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
                  `,
                  }}
                ></div>
                <div
                  aria-hidden
                  className="h-[697px] w-[241px]"
                  style={{
                    backgroundSize: "24px 24px",
                    backgroundImage: `
                  linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
                  `,
                  }}
                ></div>
              </div>
            </div> */}

            {/* <div className="absolute right-0">
              <div className="w-80 h-80 bg-zinc-50 -z-10 mask-[radial-gradient(circle,rgba(255,255,255,0.08)_10%,transparent_70%)]">
              </div>
            </div> */}

            <div className="h-full flex justify-end">
              <div className="mr-5">
                <div className="text-4xl font-heading-now-medium pb-1 text-neutral-300">
                  <span className="font-literata border px-2 text-3xl text-neutral-200 border-neutral-600 mr-2">+1</span>Año de experiencia
                </div>
                <div className="flex justify-center">
                  <span className="font-literata px-2 text-neutral-400 text-[16px] border-neutral-700">Antioquia, Colombia</span>
                </div>
                <div className="border-neutral-700 border-r h-2/5 w-3/4 mt-6 font-literata grid grid-rows-3 items-center justify-items-end">
                  {/* <div className="relative w-fit h-fit border-y transition-all bg-background hover:px-4 cursor-pointer pl-1 pr-2 left-0.5 duration-700 border-neutral-700 flex pb-1">
                    work
                  </div>
                  <div className="relative w-fit h-fit border-y transition-all bg-background hover:px-4 cursor-pointer pl-1 pr-2 left-0.5 duration-700 border-neutral-700 pb-1 flex">
                    contact
                  </div>
                  <div className="relative w-fit h-fit border-y transition-all bg-background hover:px-4 cursor-pointer pl-1 pr-2 left-0.5 duration-700 border-neutral-700 pb-1 flex">
                    github
                  </div> */}
                </div>
              </div>
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