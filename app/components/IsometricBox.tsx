import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { ISection, IsoBoxSection } from "./stack";

export const IsometricBox: React.FC<{ data_id: string, section: IsoBoxSection, className: string | undefined, clicked: string, setClicked: Dispatch<SetStateAction<string>> }> = ({ data_id, section, className, clicked, setClicked }) => {

    const ContentMapper = (data_id: string, contents: ISection[]) => {
        return (
            <>
                {
                    contents.map((a) => {
                        return (
                            <p className={`transition-all delay-400 duration-300 origin-top-left text-nowrap ${clicked === data_id ? "border-neutral-500 py-1 px-2 border border-b-0" : ""}`} key={a.name}>
                                {a.name}
                            </p>
                        );
                    })
                }
                {
                    clicked !== data_id &&
                    contents.map((a) => {
                        return (
                            <p aria-hidden="true" key={a.name + "_b"}>{a.name}</p>
                        );
                    })
                }
            </>
        );
    };

    return (
        <div
            data-id={data_id}
            onClick={(e) => {
                // setEmpty(false);
                setClicked((e.currentTarget.dataset.id as string));
            }}
            className={`z-40 h-[10%] w-[10%] transition-all duration-700 absolute font-heading-now-medium ${clicked === data_id ?
                "opacity-0" :
                `select-none cursor-pointer ${className}`}`}
        >
            <div className={`transition-all duration-800 face ${clicked === data_id ? "normal" : "front"}`}>
                <div className={`transition-all duration-800 w-full h-full ${clicked === data_id ? "bg-transparent!" : ""}`}></div>
            </div>
            <div className={`transition-all duration-700 face ${clicked === data_id ? "side -rotate-120 top-0 left-0 opacity-0 select-none" : "side"}`}>
                <div className={`relative transition-all duration-800 ${clicked === data_id ? "w-full h-full bg-transparent! iso-on-iso-normal transition-transform" : "transition-all w-full h-full"}`}>
                    <div className={`overflow-clip transition-all duration-800 origin-center h-full text-2xl relative ${clicked === data_id ? "w-[33dvw] h-13! mt-23 ml-12 iso-normal -rotate-30" : "-rotate-180 fadeout-vertical-5"}`}>
                        <div className={`text-end transition-all text-zinc-300 duration-800 gap-1 relative origin-top-left flex ${clicked === data_id ? "border border-neutral-600 left-0 h-fit w-fit max-w-[100%] py-4 px-2 gap-6 scale-75 overflow-scroll" : `border-0 border-transparent left-full pl-1 rotate-90 marquee-track-x ${data_id === "01" ? "speed-10" : "speed-15"}`}`}>
                            {ContentMapper(data_id, section.list)}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`transition-all duration-1000 text-nowrap face content-center ${clicked === data_id ? "delay-200 iso-side translate-x-[30dvw] -translate-y-[60px] z-20 text-neutral-500 select-none" : "top"}`}>
                <div className={`transition-all duration-1000 w-full h-full ${clicked === data_id ? "delay-200 bg-transparent! rotate-90 transition-transform" : ""}`}>
                    <span className={`leading-12 duration-1000 tracking-wider inline-block font-bold ${clicked === data_id ? "delay-200 px-5 py-2 text-6xl tracking-wide!" : "rotate-180 text-5xl w-full text-center"}`}>
                        {section.title}
                        <div className={`transition-all duration-800 ${clicked === data_id ? "w-full h-30 border-r border-t mt-2 delay-800" : "w-0 h-0"}`}>
                        </div>
                    </span>
                </div>
            </div>
        </div >
    );
}