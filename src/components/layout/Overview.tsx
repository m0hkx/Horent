import Topbar from "./Topbar";

function Overview() {
    return (
        <>
            <div className="grid grid-cols-12 grid-rows-14 gap-[12px] px-[5vw] py-[1vw] w-full h-full">
                <Topbar />
                <h1 className="row-start-2 col-span-2 self-end-safe text-4xl" style={{ fontFamily: 'Lufga', fontWeight: 600 }}>Real Estate</h1>
                <div className="bg-[#FFFFFF] row-start-3 row-span-6 col-span-6 rounded-[40px] drop-shadow-[0_0_2px_rgba(0,0,0,0.25)] flex flex-col">
                    <div>
                        <h1 className="text-2xl p-7" style={{ fontFamily: 'Lufga', fontWeight: 500 }}>Property Analytics</h1>
                    </div>
                    <ul className="flex justify-between w-3/4 text-[#616161] pb-3 px-5 mx-auto flex-1 items-end" style={{ fontFamily: 'Lufga', fontWeight: 400 }}>
                        <li className="flex flex-col items-center justify-end h-full">
                            <div className="relative w-10 h-[70%]">
                                <div className="bg-[#D9D9D9] w-10 h-full rounded-full"></div>
                                <div className="absolute bottom-0 bg-[#9366FF] w-10 h-[60%] rounded-full"></div>
                            </div>
                            <p>Sat</p>
                        </li>
                        <li className="flex flex-col items-center justify-end h-full">
                            <div className="relative w-10 h-[50%]">
                                <div className="absolute bottom-0 bg-[#9366FF] w-10 h-[60%] rounded-full"></div>
                                <div className="bg-[#D9D9D9] w-10 h-full rounded-full"></div>
                            </div>
                            <p>Sun</p>
                        </li>
                        <li className="flex flex-col items-center justify-end h-full">
                            <div className="relative w-10 h-[70%]">
                                <div className="absolute bottom-0 bg-[#9366FF] w-10 h-[70%] rounded-full"></div>
                                <div className="bg-[#D9D9D9] w-10 h-full rounded-full"></div>
                            </div>
                            <p>Mon</p>
                        </li>
                        <li className="flex flex-col items-center justify-end h-full">
                            <div className="relative w-10 h-[100%]">
                                <div className="absolute bottom-0 bg-[#9366FF] w-10 h-[80%] rounded-full"></div>
                                <div className="bg-[#D9D9D9] w-10 h-full rounded-full"></div>
                            </div>
                            <p>Tue</p>
                        </li>
                        <li className="flex flex-col items-center justify-end h-full">
                            <div className="relative w-10 h-[60%]">
                                <div className="absolute bottom-0 bg-[#9366FF] w-10 h-[70%] rounded-full"></div>
                                <div className="bg-[#D9D9D9] w-10 h-full rounded-full"></div>
                            </div>
                            <p>Wed</p>
                        </li>
                        <li className="flex flex-col items-center justify-end h-full">
                            <div className="relative w-10 h-[40%]">
                                <div className="absolute bottom-0 bg-[#9366FF] w-10 h-[65%] rounded-full"></div>
                                <div className="bg-[#D9D9D9] w-10 h-full rounded-full"></div>
                            </div>
                            <p>Thu</p>
                        </li>
                        <li className="flex flex-col items-center justify-end h-full">
                            <div className="relative w-10 h-[50%]">
                                <div className="absolute bottom-0 bg-[#9366FF] w-10 h-[80%] rounded-full"></div>
                                <div className="bg-[#D9D9D9] w-10 h-full rounded-full"></div>
                            </div>
                            <p>Fri</p>
                        </li>
                    </ul>
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