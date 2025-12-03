// zinc-50
// zinc-600
// black
export default function Home() {
  return (
    <div className="text-sm min-h-screen font-sans w-full relative overflow-hidden">
{/* w-[95%] px-4 mx-auto bg-[#1e1e20] h-15 my-2 */}
      <nav className="w-full absolute">
        <div className="w-[95%] h-15 mx-auto bg-[#1e1e20] px-4 my-2 flex justify-between">
          <div className="h-13 my-auto border border-zinc-50 w-14 items-center select-none text-center text-4xl font-serif font-bold underline underline-offset-2">
            ∑
          </div>
          <div className="flex flex-1 justify-end">
            <div className="text-white items-center flex w-xl text-lg select-none font-console justify-around [&>span]:hover:underline">
              <span className="max-w-fit cursor-pointer h-fit">./Projects</span>
              <span className="max-w-fit cursor-pointer h-fit">./My story</span>
              <span className="max-w-fit cursor-pointer h-fit">./About</span>
              <div className="h-full content-center">
                {/* BORDE CIRCULAR A CUADRADO EN TRANSITION??? */}
                <button className="text-base px-3 py-2 border border-zinc-50 font-semibold cursor-pointer bg-zinc-900 hover:bg-zinc-50 hover:text-zinc-900 transition-colors delay-200 ease-in-out">
                  <span className="font-bold mr-1">{"-> "}</span>
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="h-svh pt-12 border-b border-amber-50 content-center">
        <div className="w-full grid grid-cols-8 font-bold px-16 pb-6">
          {/* <div className="font-extrabold text-9xl col-span-1 w-fit h-fit">*</div> */}
          <div className="text-[5rem] w-fit col-start-2 col-end-6 font-anton">
            {"{ full - stack }"}
          </div>
          {/* <div className="border rounded-bl-full rounded-tr-full border-amber-50"></div> */}
          {/* <div className="flex justify-center -mt-5"> */}
          <div className="text-base font-normal text-left content-start col-start-2 col-end-4 -mt-4 mr-7">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, quis aliquid! Suscipit incidunt at maxime
            deserunt.
            {/* inventore vero minima aliquid quasi, ullam voluptatem soluta ipsum assumenda vel temporibus nihil iste. */}
          </div>
          <div className="text-[5rem] col-start-4 col-end-7 -mt-7 font-anton">
            Developer <span className="font-normal text-6xl">{">"}</span>
          </div>
          {/* </div> */}
        </div>
      </main>
      <pre className="text-transparent bg-clip-text hand-bg-gradient font-mono whitespace-pre text-xs select-none">
        {`
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⡤⣴⡶⠶⠦⢤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⠋⢁⣾⡟⠀⠀⠀⠀⠀⠉⠓⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣡⢴⣶⣾⣿⣷⣶⣶⣤⣄⠀⠀⠀⠀⠹⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⠛⠉⠉⠀⠀⠀⠀⠉⠉⠛⢷⣤⠀⠀⠀⡼⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⠏⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣧⡘⡆⢻⣽⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⢻⠀⡿⡀⢀⡀⠀⠀⢀⣀⣀⣀⡀⠀⣺⣿⣷⡿⢸⠇⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡞⠀⣧⣿⣿⣿⡆⠀⢾⣿⣿⣿⡟⠠⣟⣿⣽⣇⠸⡆⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣧⣷⠀⡇⠀⠀⢠⣇⠀⠀⠀⠀⠀⠀⠘⣿⠏⢿⣾⡆⢻⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡿⡇⠀⣷⠀⠀⣼⢧⣠⣄⠀⠀⠀⠀⠀⣿⣴⣿⡟⠁⣼⢸⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡟⢰⣿⡀⠀⣬⣿⣿⣏⣠⠀⠀⠀⠀⢻⣟⣿⣧⠀⢻⡘⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢯⣷⠈⡷⢻⣄⠙⣿⣿⣟⠁⠀⠀⠀⣠⣾⣿⠛⣼⠀⠀⣷⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢧⣼⡇⣿⣿⢳⣍⣉⣋⣠⣤⠶⠚⢹⡇⢹⣶⣇⠀⢰⠉⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⠟⣿⢾⣿⣿⣿⡍⠉⠀⠀⠀⠀⢸⣿⣿⠃⡾⠀⣻⣄⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⣾⣿⣼⡿⣿⣿⡇⠀⠀⠀⠀⠀⣼⡉⣿⠀⡇⢸⡏⠙⢿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢼⣯⣿⢹⣧⡿⠿⠁⠀⠀⠀⠀⠀⠸⣇⢿⡀⡇⢸⡧⠀⠀⠹⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣰⣾⣿⣿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⢸⡇⡇⢸⠁⠀⠀⠀⠈⠙⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠚⠋⢻⣾⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠃⢸⡇⡇⢸⣧⣠⣤⠤⠴⠒⠒⡻⢦⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⡟⠀⠀⢰⡿⡇⠹⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣇⣻⣧⡿⠟⡉⠀⣀⣀⣀⣀⣀⣀⣀⠈⠙⢶⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⠟⠀⠀⣰⡇⠹⣟⢦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣿⣿⣿⣾⣿⣾⣿⣭⡿⠷⠶⠶⣯⣉⠙⠲⣮⣷⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢂⡾⠁⠀⠀⠀⡿⠀⠀⢈⣿⠾⢿⣷⣖⡤⠤⢤⣤⣤⡾⠋⣱⡷⣿⡿⢿⠏⠉⣿⠀⠀⠀⠀⠀⠀⠈⢻⡦⣤⣿⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡿⠀⠀⠀⢸⠃⠀⠀⣾⡟⢀⣾⠇⢹⣿⠉⠓⣾⠋⣠⣾⣿⠷⠋⢠⡏⠀⢰⠃⠀⠀⠀⠀⠀⠀⠀⠈⡇⠀⢹⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡿⠁⠀⠀⠀⢻⠀⠀⢸⡿⠀⣼⡟⢀⣾⡟⢀⡞⢁⣾⣿⣿⠏⠀⠀⣸⠁⠀⣾⠀⠀⠀⠀⠀⠀⠀⠀⢠⡇⠀⠀⣷⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⠁⠀⠀⠀⠀⢸⡀⠀⢸⠇⢀⣿⠀⣸⡟⣰⠏⣰⣿⢟⡽⠏⠀⠀⢠⡇⠀⢠⡏⠀⠀⠀⠀⠀⠀⠀⠀⢸⡁⠀⠀⠈⣇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠁⣀⣤⣤⣦⣤⣈⣧⠀⢸⠀⠀⡏⢠⡿⣹⢣⣾⢟⣵⠟⠁⠀⠀⠀⣾⠁⠀⢸⠃⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⢹⡆⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣼⠿⠞⠋⠁⠀⠀⠀⠀⠀⠹⡇⠘⠀⠀⠧⢸⣿⣿⡿⠗⠋⠀⠀⠀⠀⠀⢀⡇⠀⠀⡼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡀⠀⠀⠀⢳⡀⠀⠀
⠀⠀⠀⠀⢀⡾⠫⠀⠀⠀⠀⠀⢀⣀⣤⣀⠀⠀⡗⠀⠀⠀⠀⣶⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⣾⠀⠀⢰⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⡀⠀⠀⠈⣇⠀⠀
⠀⠀⠀⢠⡟⠀⠀⠀⢀⣤⠖⢛⣯⠀⠀⠘⢳⣤⡇⠀⠀⠀⣼⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠏⠀⠀⡾⠀⢀⣤⣖⣚⣛⣛⠛⠛⠛⠛⠉⢈⡇⠀⠀⠀⢸⡆⠀
⠀⠀⠀⣾⠀⠀⠀⠀⣾⣵⠞⠉⢡⡶⠃⠀⣀⣿⣇⣀⣀⡾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠟⠀⠀⡼⣃⡴⠟⠉⠉⠉⠉⠉⠉⠓⠒⠶⠖⢻⡇⠀⠀⠀⠈⣿⠀
⠀⠀⣼⡏⠀⠀⠀⢸⣿⡃⠀⢠⡏⠀⠀⣰⢫⡟⠉⠉⠙⠛⠒⠦⢤⣄⡀⠀⠀⠀⠀⢠⡏⠀⠀⣼⡿⢋⣤⣤⠤⠤⢤⣄⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⢻⡄
⠀⢸⡏⠀⠀⠀⠀⠈⣿⡄⠀⢘⡇⠀⢰⡏⣾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠳⣤⣀⣼⠋⠀⣠⣾⣵⣞⠉⠀⠈⠉⠁⠀⠈⠳⢤⣀⠀⠀⠀⠈⣿⡀⠀⠀⠀⠀⣷
⠀⢸⣇⠀⠀⠀⠀⠀⠹⣿⠲⠾⣧⣤⣼⣧⢿⣶⣄⠀⠀⠀⠀⠀⠀⠀⢠⣤⣜⠙⢿⣷⠚⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠓⠲⠶⠶⣿⣷⠀⠀⠀⠀⢻
⠀⠀⠙⣷⠀⠀⠀⠀⠀⠙⣆⠀⠀⠀⢀⣬⠿⡟⠛⠳⣄⠀⠀⠀⠀⢠⡀⠙⢮⣟⢦⡈⠳⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡿⣿⠀⠀⠀⠀⢸
⠀⠀⠀⠘⣿⠀⠀⠀⠀⠀⠹⣦⠀⠀⣸⣗⡴⣳⡄⠀⠈⢳⣄⠰⢦⣀⠙⢦⣀⠉⠳⡙⠲⠮⠷⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠟⠀⣿⠀⠀⠀⠀⢸
⠀⠀⠀⣴⠿⠀⠀⠀⠀⠀⠀⢿⡄⠰⣿⣿⢀⡼⣧⡀⠀⠀⠈⠛⣦⣬⡳⢤⣌⡛⢦⣜⣦⡀⠀⠀⢀⡀⠀⠀⠀⠀⠀⣤⠀⣠⡿⣶⢛⣿⠀⠀⢹⣧⠀⠀⠀⠉
⠀⠀⣰⣿⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠹⣿⣿⡿⠃⣴⣿⣿⣛⣋⣽⣧⠭⠿⠿⠿⠽⠿⠿⠿⠶⠶⠿⠧⠤⠾⠿⠶⠟⠛⠉⠁⣀⡿⠀⣿⠀⠀⣀⡟⠀⠀⠀⠀
⠀⣸⠏⠹⣦⠀⠀⠀⠀⠀⠀⠀⡇⠀⣀⡴⠿⣗⣾⡷⣿⡋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⣀⠀⢀⣀⣀⣤⣤⣤⣤⠶⠞⠋⠀⣰⠇⠀⠀⣿⠁⠀⠀⠀⢠
⠀⡟⠀⠀⠙⠇⠀⠀⠀⠀⢀⣠⡿⠋⠛⠳⣄⠈⠉⠀⠈⢿⠶⣦⠤⠴⠶⠶⠶⠶⠶⢿⠛⢻⡟⠉⠉⠉⠀⠀⢹⡇⢸⡇⠀⠀⢀⡼⠃⠀⠀⢠⠇⠀⠀⠀⠀⢸
⢸⣇⠀⠀⠀⠀⠀⠀⣠⣾⡉⠉⠙⢲⠄⠀⠉⠀⠀⠀⢀⣾⠀⢿⡀⠀⠀⠀⠀⠀⠀⣸⠆⠈⣷⠀⠀⠀⠀⢀⡾⠃⠈⣧⠀⢀⡞⠀⠀⠀⠀⣾⠀⠀⠀⠀⠀⡟
⠈⠛⠃⠀⠀⠀⠀⠘⠋⠁⠉⠛⠀⠀⠀⠀⠀⠀⠀⠀⠘⠃⠀⠘⠁⠀⠀⠀⠀⠀⠘⠃⠀⠀⠙⠀⠀⠀⠀⠘⠋⠀⠀⠛⠀⠋⠀⠀⠀⠀⠀⠛⠀⠀⠀⠀⠘⠁
⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⡀⣀⡀⢀⣀⣀⣀⢀⡀⢀⡀⣀⡀⢀⡀⢀⡀⠀⠀⠀
⠀⠀⠀⣴⣾⣿⣷⣶⣶⣿⢿⣲⡶⣦⡶⣶⣶⣷⣶⣶⣴⢲⣿⡆⢠⡶⢲⣖⣶⣖⣶⣦⠠⠤⠀⢻⣷⣾⣿⢯⣿⣾⣧⣨⡿⠛⡷⢿⣿⡿⣽⣿⣻⡿⣿⠀⠀⠀
⠀⠀⠀⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⡉⠉⠉⠉⠁⠉⠀⠀⠀⢉⡉⠈⠉⠉⠁⢉⠉⠉⠀⠉⠉⠉⠁⠉⡉⢉⠉⠉⠉⠀⠀⠀
 `}
      </pre>
    </div>
  );
}