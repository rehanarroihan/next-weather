import Navbar from "./Components/Navbar";
import Temperature from "@/app/Components/Temperature/Temperature";
import AirPollution from "@/app/Components/AirPollution/AirPollution";

export default function Home() {
  return <main className='mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto'>
    <Navbar />
    <div className="pb-4 flex flex-col gap-4 md:flex-row">
      <div className="flex flex-col gap-4 w-full min-w-[18rem] md:w-[35rem]">
        <Temperature/>
      </div>
      <div className="flex flex-col w-full">
        <div className="instruments grid h-full sm-2:col-span-2 lg:grid-cols-3 xl:grid-cols-4">
          <AirPollution/>
        </div>
      </div>
    </div>
  </main>
}
