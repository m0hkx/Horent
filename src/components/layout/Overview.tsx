import Topbar from "./Topbar";

function Overview() {
    return (
        <>
        <div className="grid grid-cols-12 grid-rows-14 gap-[12px] px-[5vw] py-[1vw] w-full h-full">
            <Topbar />
            <h1 className="row-start-2 col-span-2 self-end-safe text-4xl" style={{ fontFamily: 'Lufga', fontWeight: 600 }}>Real Estate</h1>
            <div className="bg-[#FFFFFF] row-start-3 row-span-6 col-span-6 rounded-[40px] drop-shadow-[0_0_2px_rgba(0,0,0,0.25)]">

            </div>

            <div className="bg-[#FFFFFF] row-start-3 row-span-4 col-start-7 col-span-3 rounded-[40px] drop-shadow-[0_0_2px_rgba(0,0,0,0.25)]">

            </div>

            <div className="bg-[#FFFFFF] row-start-3 row-span-4 col-start-10 col-span-3 rounded-[40px] drop-shadow-[0_0_2px_rgba(0,0,0,0.25)]">

            </div>

            <div className="bg-[#FFFFFF] row-start-7 row-span-8 col-start-7 col-span-6 rounded-[40px] drop-shadow-[0_0_2px_rgba(0,0,0,0.25)]">

            </div>

            <div className="bg-[#FFFFFF] row-start-9 row-span-6 col-span-6 rounded-[40px] drop-shadow-[0_0_2px_rgba(0,0,0,0.25)]">

            </div>
        </div>
        </>

    );
}

export default Overview;