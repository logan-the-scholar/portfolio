"use client";
import { useEffect, useState } from "react";
import { IsometricBox } from "./IsometricBox";

export interface ISection {
    name: string,
    text: string
}
export interface IsoBoxSection {
    title: string,
    list: ISection[],
    description: string,
}

export default function Stack() {
    const [clicked, setClicked] = useState<string>("01");
    const [empty, setEmpty] = useState<boolean>(false);

    const frontend_stack: IsoBoxSection = {
        title: "Frontend Stack",
        list: [
            { name: "JavaScript", text: "Lorem ipsum 1" },
            { name: "TypeScript", text: "Lorem ipsum 2" },
            { name: "CSS", text: "Lorem ipsum 3" },
            { name: "Tailwind", text: "Lorem ipsum 4" },
            { name: "React", text: "Lorem ipsum 5" },
            { name: "Redux", text: "Lorem ipsum 6" }
        ],
        description: `AAAAAAAAAAAAAAAAAA Lorem ipsum dolor sit, amet consectetur adipisicing elit. A praesentium, impedit odit enim vero 
        voluptatum repellat dolorem eius inventore earum laboriosam temporibus corporis blanditiis fugiat esse iusto quidem, dolorum molestias?
        AAAAAAAAAAAAAAAAAA Lorem ipsum dolor sit, amet consectetur adipisicing elit. A praesentium, impedit odit enim vero 
        voluptatum repellat dolorem eius inventore earum laboriosam temporibus corporis blanditiis fugiat esse iusto quidem, dolorum molestias?
        `
    };

    const backend_stack: IsoBoxSection = {
        title: "Backend Stack",
        list: [
            { name: "NodeJs", text: "Lorem ipsum 1" },
            { name: "NestJs", text: "aaaaaa 2" },
            { name: "MySQL", text: "Database boss 3" },
            { name: "PostgreSQL", text: "Database god 4" },
            { name: "API-Service", text: "IDK 5" },
            { name: "Java", text: "IDK 5" },
            { name: "Springboot", text: "IDK 5" },
            { name: "Python", text: "IDK 5" }
        ],
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci eaque dolor voluptatem. At cupiditate quisquam illum 
        consequuntur. Autem tempora accusantium repellat sunt ab obcaecati, in, deserunt numquam nulla, illum natus! Lorem ipsum dolor sit amet 
        consectetur, adipisicing elit. Ex nulla, aspernatur quam quasi numquam, modi sequi qui eius aliquam molestias, nisi autem asperiores 
        cumque assumenda soluta! Ducimus at beatae est?
        `
    }

    useEffect(() => {
        console.log(clicked);
    }, [clicked]);

    return (
        <div className="w-full h-full py-10 flex">

            <div className="w-1/2 h-[90%] my-auto relative">
                <div className="select-none face iso-side absolute text-[110px] text-nowrap leading-22 text-neutral-800 font-heading-now-medium rotate-60 left-1/10 top-[10%]">
                    <div className="w-fit h-fit border-b border-neutral-800">
                        {/* <span className="text-7xl font-sans"><span className="font-heading-now-medium text-7xl">+</span>20</span> */}
                        <span className="ml-4">Skills </span><span className="text-5xl">&</span>
                        <div className="text-7xl">
                            Technologies
                        </div>
                    </div>
                </div>
                <div className="face iso-front left-1/2 isobox-z-313 isobox-y-313 rotate-60 absolute top-full">
                    <div className="fadeout-horizontal-15 h-[313px] w-[313px] absolute">
                        <div
                            className="fadeout-vertical-15 h-full w-full transition-all duration-800 delay-300"
                            style={{
                                backgroundSize: "24px 24px",
                                backgroundImage: `
                  linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
                  `,
                            }}>
                            {/* <div className="h-2/3 w-2/3 top-1/6 left-1/6 rounded-full border-dashed border border-[rgb(255,255,255,0.15)] absolute"></div> */}
                        </div>
                    </div>

                    {/* NODELINKS */}
                    <div className="iso-grid-size-24">
                        <div className={`w-grid-sized-1 h-grid-sized-7 rounded-tl-full border-t border-l border-dashed plane-coords-x-4 plane-coords-y-1 
absolute ${clicked !== "02" ? "border-neutral-500" : "border-neutral-300"}`}>
                        </div>

                        <div className={`w-grid-sized-1 h-grid-sized-2 rounded-tl-full border-t border-l border-dashed plane-coords-x-9 plane-coords-y-2 
absolute ${clicked !== "01" ? "border-neutral-500" : "border-neutral-300"}`}>
                            {/* <div className="absolute w-grid-sized-1 h-grid-sized-2 rounded-br-full border-b border-r border-dashed top-full -left-full"></div> */}
                        </div>

                        <div className={`transition-opacity duration-400 w-grid-sized-1 h-grid-sized-2 border-dashed border border-neutral-300 absolute plane-coords-y-3 plane-coords-x-8 
bg-background ${clicked === "01" ? "opacity-100" : "opacity-0"
                            }`}>
                            {/* <span className="w-full h-full select-none text-center font-heading-now-larger inline-block text-2xl rotate-180 text-neutral-500">
                                F
                            </span> */}
                        </div>
                        <div className={`transition-opacity duration-400 w-grid-sized-1 h-grid-sized-2 border-dashed border border-neutral-300 absolute plane-coords-y-2 plane-coords-x-3 
bg-background ${clicked === "02" ? "opacity-100" : "opacity-0"}`}>
                            {/* <span className="select-none font-heading-now-larger inline-block text-2xl rotate-180 text-neutral-500">
                                B
                            </span> */}
                        </div>
                    </div>

                    <div className="iso-grid-size-12">
                        <div className={`transition-colors duration-800 w-grid-sized-4 h-grid-sized-2 border plane-coords-x-22 plane-coords-y-1 absolute justify-center 
flex rounded-xl bg-background ${clicked === "00" ? "border-neutral-500" : "border-neutral-300"}`}>
                            <span className="select-none font-heading-now-larger inline-block text-lg leading-5 rotate-180 text-neutral-500">
                                And
                            </span>
                        </div>

                        <div className={`transition-colors duration-800 w-grid-sized-6 h-grid-sized-6 fade-half rounded-bl-4xl border-b border-l border-dashed absolute plane-coords-x-24 
plane-coords-y-3 ${clicked === "00" ? "border-neutral-500" : "border-neutral-300"}`}>
                        </div>

                        <div className="iso-grid-size-12">
                            <div className="w-grid-sized-6 h-grid-sized-6 absolute plane-coords-x-24 plane-coords-y-3">
                                <div className="relative rotate-45 w-6 h-6 top-1/2 -left-1/2">
                                    <div className={`transition-all duration-800 delay-100 border-t border-r rounded-tr-3xl border-dashed h-54 relative left-12 
bottom-0.5 ${clicked === "00" ? "w-26 border-neutral-600" : "w-56 border-neutral-400"}`}>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <div className="iso-grid-size-24">
                        <div className="w-grid-sized-1 h-grid-sized-2 border-l border-dashed plane-coords-x-12 plane-coords-y-1 absolute">
                          
                        </div>
                    </div> */}

                </div>
            </div>

            <div className="relative w-1/2 h-[90%] my-auto p-5">
                <div className={`-rotate-30 top-3 absolute right-full mr-4 hover:[&>svg]:-translate-y-3 ${clicked === "00" ? "" : "transition-transform duration-400 cursor-pointer"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        data-id="00"
                        width="48" height="48" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className={`lucide lucide-undo-icon lucide-undo transition-all duration-800 ${clicked === "00" ? "delay-500 relative -translate-y-14 opacity-0" : ""}`}
                        onClick={(e) => {
                            setEmpty(true);
                            setClicked((e.currentTarget.dataset.id as string));
                        }}
                    >
                        <path d="M3 7v6h6" /><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
                    </svg>
                </div>

                {/* FRONTEND STACK */}
                <IsometricBox
                    data_id="01" section={frontend_stack}
                    className={`-translate-x-[calc(500%+40px)] translate-y-[calc(340%-2px)] hover:isobox-z-55 hover:isobox-y-42 hover:isobox-x-210 isobox-z-50 isobox-y-38 isobox-x-205 [&>div]:bg-background hover:[&>div]:bg-transparent 
[&>div]:p-0.5 [&>div>div]:bg-[#303030]`}
                    clicked={clicked} setClicked={setClicked}
                />

                {/* BACKEND STACK */}
                <IsometricBox
                    data_id="02" section={backend_stack}
                    className={`-translate-x-[calc(500%+124px)] translate-y-[calc(340%+70px)] hover:isobox-z-55 hover:isobox-y-42 hover:isobox-x-205 isobox-z-50 isobox-y-38 isobox-x-200 [&>div]:bg-background hover:[&>div]:bg-transparent 
[&>div]:p-0.5 [&>div>div]:bg-[#303030]`}
                    clicked={clicked} setClicked={setClicked}
                />

                <div className={`transition-colors duration-800 pl-7 py-5 border-t border-l flex-1 h-3/5 text-zinc-200 bg-background ml-14 text-[16px] mt-25 relative ${clicked === "00" ? "border-transparent" : "border-neutral-600"}`}>
                    <div className="overflow-y-auto pr-2 relative fadeout-vertical-5 w-full h-full font-literata font-light">
                        <div className={`transition-opacity duration-800 absolute bg-transparent top-0 ${clicked === "01" ? "opacity-100 select-auto z-0 delay-500" : "-z-10 duration-600! opacity-0 select-none"}`}>
                            AAAAAAAAAAAAAAAAAA Lorem ipsum dolor sit, amet consectetur adipisicing elit. A praesentium, impedit odit enim vero voluptatum repellat dolorem eius inventore earum laboriosam temporibus corporis blanditiis fugiat esse iusto quidem, dolorum molestias?
                        </div>
                        <div className={`transition-opacity duration-800 absolute bg-transparent top-0 ${clicked === "02" ? "opacity-100 select-auto z-0 delay-500" : "-z-10 duration-600! opacity-0 select-none"}`}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci eaque dolor voluptatem. At cupiditate quisquam illum consequuntur. Autem tempora accusantium repellat sunt ab obcaecati, in, deserunt numquam nulla, illum natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex nulla, aspernatur quam quasi numquam, modi sequi qui eius aliquam molestias, nisi autem asperiores cumque assumenda soluta! Ducimus at beatae est?
                        </div>
                    </div>

                    <div className={`z-10 transition-opacity font-heading-now-medium -top-9 text-7xl text-zinc-200 duration-600 absolute ${clicked === "00" ? "opacity-100 delay-600" : "opacity-0"}`}>
                        <span className="bg-background z-10 pr-3">Mis Habilidades</span>
                        <div className="bg-background text-5xl ml-8 h-fit">Librerias <span className="text-4xl">&</span> Frameworks</div>
                        <div className="font-literata text-[18px] font-light text-zinc-400 mt-2 bg-background">click en una caja para ver mas</div>
                        <div className="absolute w-65 h-65 top-1/10 left-1/10 -z-10 rounded-full border border-neutral-700"></div>
                    </div>
                </div>
            </div>
        </div >
    );
}