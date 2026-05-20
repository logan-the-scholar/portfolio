import Stack from "./components/stack";
import Image from "next/image";
// import image from "../public/Gemini_Generated_Image_o2epvzo2epvzo2ep.png";
import sphere from "../public/Gemini_Generated_Image_ma2y8xma2y8xma2y.png";

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
                {/* BORDE CIRCULAR A CUADRADO EN TRANSITION??? */}
                <button
                  className="text-base px-3 py-2 border rounded-2xl border-zinc-50 font-semibold cursor-pointer bg-zinc-900 hover:bg-zinc-50 hover:text-zinc-900 transition-all delay-200 ease-in-out shadow-solid-5/5"
                >
                  <span className="font-bold mr-1">{"-> "}</span>
                  <span className="">
                    Contact Me
                  </span>
                </button>
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

        <div className="content-center flex h-full relative">
          <div className="absolute top-0 right-0 bg-yellow">
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
          </div>
          {/* <Image src={sphere} alt="" width={400} height={400} className="absolute invert opacity-100 -z-10 hue-rotate-90 mask-radial-at-center mask-radial-from-0% mask-radial-to-100%"></Image> */}
          <div className="absolute bg-violet-400 -z-10 mask-[radial-gradient(circle,rgba(255,255,255,0.2)_10%,rgba(255,255,255,0.14)_40%,rgba(255,255,255,0.08)_50%,transparent_70%)] w-96 h-96">
            {/* <Image
              src={sphere}
              alt="imagen"
              width={400}
              height={400}
            /> */}
          </div>

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
            <div className="font-heading-now-medium tracking-wide text-[100px] w-fit flex flex-col items-start">
              <h1 className="font-bold leading-20">
                {"FULL-STACK"}
                {/* <span>{"<"}</span> */}
              </h1>
              <h1 className="text-7xl font-bold">DEVELOPER</h1>
              {/* <h1 className="font-heading-now-small text-5xl">MACHINE LEARNING</h1> */}
              <h1 className="font-heading-now-small text-5xl"><span className="font-normal text-4xl">Machine Learning</span><span className="text-3xl">{" &"}</span> DATA ANALISIS</h1>
            </div>

            <div className="w-full flex h-fit">
              <div className="w-1 h-1 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="240" height="240"
                  viewBox="0 0 24 24"
                  fill="none" stroke="#404040" strokeWidth="0.2"
                  strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-pentagon-icon lucide-pentagon -top-4 absolute right-1 rotate-45 origin-center"
                >
                  <path d="M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z" />
                </svg>
              </div>
              <div className="font-sans text-lg font-light w-2/5 relative ml-8">
                <div className="absolute left-9/10 bg-violet-400 text-black bottom-full px-3 py-1 rounded-xl font-semibold">Advertise</div>
                Desarrollador de <span className="underline">software</span> y <span className="underline">fullstack</span> freelancer, experimentado y apasionado en crear, inventar
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

          {/* <div className="bg-orange-400 size-96 mask-[radial-gradient(circle,rgba(255,255,255,0.2)_0%,transparent_60%)] skew-12"></div> */}
        </div>

      </main>

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

    </div>
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