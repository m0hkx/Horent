import { ChevronDown } from "lucide-react";
import { weeklyData } from "../../data/WeeklyStat";

function PropertyAnalytics() {
    return (
        <>
            <div className="bg-[#FFFFFF] row-start-3 row-span-6 col-span-6 rounded-[40px] drop-shadow-[0_0_2px_rgba(0,0,0,0.25)] flex flex-col">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl p-7" style={{ fontFamily: 'Lufga', fontWeight: 500 }}>Property Analytics</h1>

                    <div className="border border-[#D9D9D9] w-35 h-12 rounded-full mr-7 flex items-center justify-between p-4 cursor-pointer">
                        <p className="text-[#616161]">This Week</p>
                        <ChevronDown color="#616161" />
                    </div>
                </div>

                <ul className="flex justify-between w-3/4 text-[#616161] pb-3 px-5 mx-auto flex-1 items-end" style={{ fontFamily: "Lufga", fontWeight: 400 }}>
                    {weeklyData.map((item) => (
                        <li key={item.day} className="flex flex-col items-center justify-end h-full">
                            <div className="relative w-10" style={{ height: `${item.containerHeight}%` }}>
                                <div className="bg-[#D9D9D9] w-10 h-full rounded-full"></div>
                                <div className="absolute bottom-0 bg-[#9366FF] w-10 rounded-full" style={{ height: `${item.valueHeight}%` }}></div>
                            </div>
                            <p>{item.day}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default PropertyAnalytics;