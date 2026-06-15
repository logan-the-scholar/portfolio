import { Dispatch, SetStateAction } from "react";
import { ISection, IsoBoxSection } from "./stack";

export const IsometricBox: React.FC<{ data_id: string, section: IsoBoxSection, className: string | undefined, clicked: string, setClicked: Dispatch<SetStateAction<string>> }> = ({ data_id, section, className, clicked, setClicked }) => {

    const ContentMapper = (data_id: string, contents: ISection[]) => {
        return (
            <>
                {
                    contents.map((a) => {
                        return (
                            <p className={`select-none animation-all delay-400 duration-300 origin-top-left`} key={a.name}>
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
                    `cursor-pointer hover:[&>div>div]:m-1 [&>div>div]:ease-in-out [&>div>div]:transition-all [&>div>div]:duration-700 ${className}`}`}
        >
            <div className={`duration-800 face ${clicked === data_id ? "normal" : "front"}`}>
                <div className="w-full h-full"></div>
            </div>
            <div className={`transition-all duration-800 face ${clicked === data_id ? "normal mt-25" : "side"}`}>
                <div className={`relative transition-all duration-800 ${clicked === data_id ? "-left-1/2 h-fit w-fit bg-transparent!" : "w-full h-full"}`}>
                    <div className={`overflow-clip duration-700 origin-center h-full text-3xl relative ${clicked === data_id ? "w-fit h-fit" : "-rotate-180 fadeout-vertical-5"}`}>
                        <div className={`text-end transition-all text-zinc-300 duration-800 gap-1 relative origin-top-left flex ${clicked === data_id ? "left-0 h-fit w-fit nose py-4 px-2 gap-6 border-r border-neutral-600" : "left-full pl-1 rotate-90 marquee-track-x"}`}>
                            {ContentMapper(data_id, section.list)}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`duration-800 text-nowrap face content-center ${clicked === data_id ? "normal" : "top"}`}>
                <div className={`w-full h-full ${clicked === data_id ? "bg-background!" : ""}`}>
                    <span className={`leading-12 duration-800 tracking-wider inline-block font-bold ${clicked === data_id ? "px-5 py-2 text-6xl" : " rotate-180 text-5xl"}`}>
                        {section.title}
                    </span>
                </div>
            </div>
        </div>
    );
}