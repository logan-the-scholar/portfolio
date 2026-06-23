import { Dispatch, SetStateAction } from "react";
import { ISection, IsoBoxSection } from "./stack";

export const IsometricBox: React.FC<{ data_id: string, section: IsoBoxSection, className: string | undefined, clicked: string, setClicked: Dispatch<SetStateAction<string>> }> = ({ data_id, section, className, clicked, setClicked }) => {

    const ContentMapper = (data_id: string, contents: ISection[]) => {
        return (
            <>
                {
                    contents.map((a) => {
                        return (
                            <p className={`animation-all delay-400 duration-300 origin-top-left text-nowrap`} key={a.name}>
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
            className={`h-[10%] w-[10%] transition-all duration-800 absolute font-heading-now-medium ${clicked === data_id ?
                "" :
                `select-none cursor-pointer hover:[&>div>div]:m-1 [&>div>div]:ease-in-out ${className}`}`}
        >
            <div className={`transition-all duration-800 face ${clicked === data_id ? "normal" : "front"}`}>
                <div className={`transition-all duration-800 w-full h-full ${clicked === data_id ? "bg-transparent!" : ""}`}></div>
            </div>
            <div className={`transition-all duration-800 face ${clicked === data_id ? "side -rotate-120 top-0 left-0" : "side"}`}>
                <div className={`relative transition-all duration-800 ${clicked === data_id ? "w-full h-full bg-transparent! iso-on-iso-normal transition-transform" : "transition-all w-full h-full"}`}>
                    <div className={`overflow-clip transition-all duration-800 origin-center h-full text-3xl relative ${clicked === data_id ? "w-[33dvw] h-13! mt-46 ml-22 iso-normal -rotate-30" : "-rotate-180 fadeout-vertical-5"}`}>
                        <div className={`text-end transition-all text-zinc-300 duration-800 gap-1 relative origin-top-left flex ${clicked === data_id ? "border border-neutral-600 left-0 h-fit w-fit max-w-[100%] py-4 px-2 gap-6 scale-75 overflow-scroll" : `border-0 border-transparent left-full pl-1 rotate-90 marquee-track-x ${data_id === "01" ? "speed-10" : "speed-15"}`}`}>
                            {ContentMapper(data_id, section.list)}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`transition-all duration-800 text-nowrap face content-center ${clicked === data_id ? "normal translate-y-87 -rotate-90 text-neutral-300 select-none" : "top"}`}>
                <div className={`transition-all duration-800 w-full h-full ${clicked === data_id ? "bg-transparent! transition-transform" : ""}`}>
                    <span className={`leading-12 duration-800 tracking-wider inline-block font-bold ${clicked === data_id ? "px-5 py-2 text-6xl" : " rotate-180 text-5xl"}`}>
                        {section.title}
                    </span>
                </div>
            </div>
        </div >
    );
}