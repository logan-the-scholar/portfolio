"use client";
import { useEffect, useState } from "react";
import { IsometricBox } from "./IsometricBox";

export interface ISection {
    name: string,
    text: string
}
export interface IsoBoxSection {
    title: string,
    list: ISection[]
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
        ]
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
        ]
    }

    const nose: IsoBoxSection = {
        title: "Otros",
        list: [
            { name: "Unity3D", text: "a" },
            { name: "Photoshop", text: "a" },
            { name: "Microsoft Excel", text: "a" },
            { name: "", text: "a" },
        ]
    }

    useEffect(() => {
        console.log(clicked);
    }, [clicked]);

    return (
        <div className="w-full h-full py-10 flex">

            <div className="w-1/2 h-[90%] my-auto relative">
                {/* <div className="absolute left-1/20 scale-120 top-1/20 w-fit h-fit hover:text-neutral-600 text-neutral-800 transition-colors duration-700 ease-in-out select-none font-heading-now-medium tracking-wide">
                    <div className="transition-all duration-800 text-[110px] text-nowrap leading-10 rotate-0">
                        <div className="ml-4 w-fit h-fit relative">
                            <span className="">Skillset </span><span className="relative top-5 text-7xl">&</span>
                            <div className="absolute text-7xl iso-normal left-[calc(100%+20px)]">
                            </div>
                        </div>
                    </div>
                    <div className="text-6xl w-fit relative left-7 -top-2">
                        Technologies
                    </div>
                </div> */}
                <div className="face iso-front left-1/2 isobox-z-313 isobox-y-413 rotate-60 absolute top-full">
                    <div className="fadeout-horizontal-15 h-[313px] w-[413px] absolute">
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
absolute ${clicked !== "02" ? "border-neutral-500" : "border-neutral-500"}`}>
                        </div>

                        <div className={`w-grid-sized-1 h-grid-sized-2 rounded-tl-full border-t border-l border-dashed plane-coords-x-9 plane-coords-y-2 
absolute ${clicked !== "01" ? "border-neutral-500" : "border-neutral-500"}`}>
                            {/* <div className="absolute w-grid-sized-1 h-grid-sized-2 rounded-br-full border-b border-r border-dashed top-full -left-full"></div> */}
                        </div>

                        <div className={`transition-opacity duration-400 w-grid-sized-1 h-grid-sized-2 border-dashed border border-neutral-500 absolute plane-coords-y-3 plane-coords-x-8 
bg-background ${clicked === "01" ? "opacity-100" : "opacity-0"
                            }`}>
                            {/* <span className="w-full h-full select-none text-center font-heading-now-larger inline-block text-2xl rotate-180 text-neutral-500">
                                F
                            </span> */}
                        </div>
                        <div className={`transition-opacity duration-400 w-grid-sized-1 h-grid-sized-2 border-dashed border border-neutral-500 absolute plane-coords-y-2 plane-coords-x-3 
bg-background ${clicked === "02" ? "opacity-100" : "opacity-0"}`}>
                            {/* <span className="select-none font-heading-now-larger inline-block text-2xl rotate-180 text-neutral-500">
                                B
                            </span> */}
                        </div>
                    </div>

                    <div className="iso-grid-size-12">
                        <div className={`transition-colors duration-800 w-grid-sized-4 h-grid-sized-2 border plane-coords-x-22 plane-coords-y-1 absolute justify-center 
flex rounded-xl bg-background ${clicked === "00" ? "border-neutral-500" : "border-neutral-500"}`}>
                            <span className="select-none font-heading-now-larger inline-block text-lg leading-5 rotate-180 text-neutral-500">
                                And
                            </span>
                        </div>

                        <div className={`transition-colors duration-800 w-grid-sized-6 h-grid-sized-6 fade-half rounded-bl-4xl border-b border-l border-dashed absolute plane-coords-x-24 
plane-coords-y-3 ${clicked === "00" ? "border-neutral-600" : "border-neutral-600"}`}>
                        </div>

                        <div className="iso-grid-size-12">
                            <div className="w-grid-sized-6 h-grid-sized-6 absolute plane-coords-x-24 plane-coords-y-3">
                                <div className="relative rotate-45 w-6 h-6 top-1/2 -left-1/2">
                                    <div className={`transition-all duration-800 delay-100 border-t border-r rounded-tr-3xl border-dashed h-54 relative left-12 
bottom-0.5 ${clicked === "00" ? "w-26 border-neutral-700" : "w-43 border-neutral-600"}`}>
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
                {/* <div className={`-rotate-30 top-3 absolute right-full mr-4 hover:[&>svg]:-translate-y-3 ${clicked === "00" ? "" : "transition-transform duration-400 cursor-pointer"}`}>
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
                </div> */}


                {/* <IsometricBox
                    data_id="03" section={frontend_stack}
                    className={`-translate-x-[calc(500%+px)] translate-y-[calc(340%-40px)] hover:isobox-z-55 hover:isobox-y-42 hover:isobox-x-210 isobox-z-50 isobox-y-38 isobox-x-205 [&>div]:bg-background hover:[&>div]:bg-transparent 
[&>div]:p-0.5 [&>div>div]:bg-[#303030]`}
                    clicked={clicked} setClicked={setClicked}
                /> */}

                {/* FRONTEND STACK */}
                <IsometricBox
                    data_id="01" section={frontend_stack}
                    className={`-translate-x-[calc(500%+40px)] translate-y-[calc(340%-2px)] isobox-z-50 isobox-y-38 isobox-x-205 [&>div]:bg-background hover:[&>div]:bg-transparent 
[&>div]:p-0.5 [&>div]:border`}
                    clicked={clicked} setClicked={setClicked}
                />

                {/* BACKEND STACK */}
                <IsometricBox
                    data_id="02" section={backend_stack}
                    className={`-translate-x-[calc(500%+124px)] translate-y-[calc(340%+70px)] isobox-z-50 isobox-y-38 isobox-x-200 [&>div]:bg-background hover:[&>div]:bg-transparent 
[&>div]:p-0.5 [&>div>div]:bg-[#303030]`}
                    clicked={clicked} setClicked={setClicked}
                />

                <div className="font-literata text-3xl text-neutral-600 absolute -top-4 left-2 border-b-0 border-r pb-1 w-[58px]">
                    {`#${clicked}`}
                </div>

                <div className="select-none w-2/3 h-px mt-31 ml-7 font-heading-now-medium flex text-2xl tracking-wide relative">
                    <div className={`ease-in-out flex flex-wrap-reverse gap-4 transition-opacity duration-800 top-full ${clicked === "02" ? "opacity-100 delay-400" : "delay-0 opacity-0 duration-500 select-none"}`}>
                        {
                            backend_stack.list.map((a) => {
                                return (
                                    <p className={`text-nowrap border-neutral-500 py-1 px-2 border rounded-xl`} key={a.name}>
                                        {a.name}
                                    </p>
                                );
                            })
                        }
                    </div>
                    <div className={`absolute ease-in-out bottom-full flex flex-wrap-reverse gap-4 transition-opacity duration-800 top-full ${clicked === "01" ? "opacity-100 delay-400 " : "delay-0 opacity-0 duration-500 select-none"}`}>
                        {
                            frontend_stack.list.map((a) => {
                                return (
                                    <p className={`text-nowrap border-neutral-500 py-1 px-2 border rounded-xl`} key={a.name}>
                                        {a.name}
                                    </p>
                                );
                            })
                        }
                    </div>
                </div>
                <div className={`transition-colors duration-800 pl-5 py-5 border-t-0 border-l-0 flex-1 h-3/5 text-zinc-200 bg-background ml-2 text-[16px] mt-3 relative ${clicked === "00" ? "border-transparent" : "border-neutral-600"}`}>
                    <div className="overflow-y-auto pr-2 relative fadeout-vertical-5 w-full h-full font-literata font-light">
                        <div className={`transition-opacity duration-800 absolute bg-transparent top-0 ${clicked === "01" ? "opacity-100 select-auto z-0 delay-500" : "-z-10 duration-600! opacity-0 select-none"}`}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, adipisci rem architecto aspernatur tempora aperiam quibusdam molestias sit excepturi necessitatibus voluptas delectus nesciunt libero totam consectetur iusto nobis possimus. Labore? Lorem ipsum dolor sit, amet consectetur adipisicing elit. A praesentium, impedit odit enim vero voluptatum repellat dolorem eius inventore earum laboriosam temporibus corporis blanditiis fugiat esse iusto quidem, dolorum molestias?
                        </div>
                        <div className={`transition-opacity duration-800 absolute bg-transparent top-0 ${clicked === "02" ? "opacity-100 select-auto z-0 delay-500" : "-z-10 duration-600! opacity-0 select-none"}`}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci eaque dolor voluptatem. At cupiditate quisquam illum consequuntur. Autem tempora accusantium repellat sunt ab obcaecati, in, deserunt numquam nulla, illum natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex nulla, aspernatur quam quasi numquam, modi sequi qui eius aliquam molestias, nisi autem asperiores cumque assumenda soluta! Ducimus at beatae est?
                        </div>
                    </div>

                    {/* <div className={`z-10 transition-opacity font-heading-now-medium -top-9 text-7xl text-zinc-200 duration-600 absolute ${clicked === "00" ? "opacity-100 delay-600" : "opacity-0"}`}>
                        <span className="bg-background z-10 pr-3">Mis Habilidades</span>
                        <div className="bg-background text-5xl ml-8 h-fit">Librerias <span className="text-4xl">&</span> Frameworks</div>
                        <div className="font-literata text-[18px] font-light text-zinc-400 mt-2 bg-background">click en una caja para ver mas</div>
                        <div className="absolute w-65 h-65 top-1/10 left-1/10 -z-10 rounded-full border border-neutral-700"></div>
                    </div> */}
                </div>

                <div

                    onClick={(e) => {
                        setClicked((clicked === "01" ? "02" : "01"));
                    }}
                    className="absolute top-[calc(100%-80px)] cursor-pointer left-8 flex items-center hover:[&>span]:w-[46px] hover:[&>span]:delay-0 hover:[&>div]:bg-neutral-300 hover:[&>div]:text-background [&>div]:border-neutral-300"
                >
                    <div className="transition-all duration-700 ease-in-out rounded-3xl bg-background px-2 text-neutral-300 border border-transparent">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="40" height="40" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-move-left-icon lucide-move-left"
                        >
                            <path d="M6 8L2 12L6 16" />
                            <path d="M2 12H22" />
                        </svg>
                    </div>
                    <span className="h-full w-0 transition-all duration-700 ease-in-out text-xl font-literata ml-1 delay-300 overflow-clip">Next</span>
                    <a className="absolute bottom-full font-literata text-neutral-500 ml-3.5">#{clicked}</a>
                </div>
            </div>
        </div >
    );
}