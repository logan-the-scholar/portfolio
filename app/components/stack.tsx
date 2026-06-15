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
            { name: "API-Service", text: "IDK 5" }
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
                <div className="face iso-front left-1/2 isobox-z-313 isobox-y-361 rotate-60 relative bottom-0">
                    <div className="fadeout-horizontal-15 h-[361px] w-[313px] absolute">
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
                </div>
            </div>

            <div className="relative w-1/2 h-[90%] my-auto p-5">
                <div className="-rotate-20 top-3 absolute right-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        data-id="00"
                        width="48" height="48" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className={`lucide lucide-undo-icon lucide-undo transition-all duration-800 ${clicked === "00" ? "delay-500 relative -translate-y-14 opacity-0" : "cursor-pointer"}`}
                        onClick={(e) => {
                            setEmpty(true);
                            setClicked((e.currentTarget.dataset.id as string))
                        }}
                    >
                        <path d="M3 7v6h6" /><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
                    </svg>
                </div>

                {/* FRONTEND STACK */}
                <IsometricBox
                    data_id="01" section={frontend_stack}
                    className={`-translate-x-[610%] translate-y-[340%] hover:isobox-z-55 hover:isobox-y-42 hover:isobox-x-210 isobox-z-50 isobox-y-38 isobox-x-205 [&>div]:bg-background hover:[&>div]:bg-transparent 
[&>div]:p-0.5 [&>div>div]:bg-neutral-800`}
                    clicked={clicked} setClicked={setClicked}
                />

                {/* BACKEND STACK */}
                <IsometricBox
                    data_id="02" section={backend_stack}
                    className={`-translate-x-[750%] translate-y-[500%] hover:isobox-z-55 hover:isobox-y-42 hover:isobox-x-205 isobox-z-50 isobox-y-38 isobox-x-200 [&>div]:bg-background hover:[&>div]:bg-transparent 
[&>div]:p-0.5 [&>div>div]:bg-neutral-800`}
                    clicked={clicked} setClicked={setClicked}
                />

                <div className="pl-7 py-5 border-t border-b flex-1 h-1/2 text-zinc-200 border-neutral-600 ml-14 text-[16px] mt-30">
                    <div className="overflow-y-auto pr-2 fadeout-vertical-5 w-full h-full font-literata font-light">
                        <div className={`transition-all duration-800 delay-0 bg-transparent top-0 ${clicked === "01" ? "opacity-100 select-auto z-0 delay-absolute" : "-z-10 duration-600! opacity-0 select-none absolute"}`}>
                            AAAAAAAAAAAAAAAAAA Lorem ipsum dolor sit, amet consectetur adipisicing elit. A praesentium, impedit odit enim vero voluptatum repellat dolorem eius inventore earum laboriosam temporibus corporis blanditiis fugiat esse iusto quidem, dolorum molestias?
                        </div>
                        <div className={`transition-all duration-800 delay-0 bg-transparent ${clicked === "02" ? "opacity-100 select-auto z-0 delay-absolute" : "-z-10 duration-600! opacity-0 select-none absolute "}`}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci eaque dolor voluptatem. At cupiditate quisquam illum consequuntur. Autem tempora accusantium repellat sunt ab obcaecati, in, deserunt numquam nulla, illum natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex nulla, aspernatur quam quasi numquam, modi sequi qui eius aliquam molestias, nisi autem asperiores cumque assumenda soluta! Ducimus at beatae est?
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}