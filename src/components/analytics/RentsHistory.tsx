import { ChevronDown, Clock4, MapPinHouse } from "lucide-react";
import { Tenants } from "../../data/Tenants";

function RentsHistory() {
    return (
        <>
            <div className="bg-[#FFFFFF] 2xl:row-start-7 2xl:row-span-8 xl:row-start-6 xl:row-span-9 md:row-start-5 md:row-span-10 col-start-7 col-span-6 rounded-[40px] drop-shadow-[0_0_2px_rgba(0,0,0,0.25)] flex flex-col">
                <div className="flex justify-between items-center flex-shrink-0">
                    <h1 className="text-2xl p-7" style={{ fontFamily: 'Lufga', fontWeight: 500 }}>
                        Rents History
                    </h1>

                    <div className="border border-[#D9D9D9] w-35 h-12 rounded-full mr-7 flex items-center justify-between p-4 cursor-pointer">
                        <p className="text-[#616161]">View All</p>
                        <ChevronDown color="#616161" />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto px-2 no-scrollbar">
                    {Tenants.map((tenant, index) => (
                        <div key={index} className="w-[90%] bg-[#F1F1F1] rounded-full h-18 flex items-center justify-between mx-auto my-3 px-3">
                            <div className="flex flex-row">
                                <img src={tenant.avatar} className="w-[55px] h-[55px] rounded-full self-center mr-4" alt={tenant.name} />

                                <div>
                                    <p style={{ fontFamily: "Lufga", fontWeight: 500 }}>
                                        {tenant.name}
                                    </p>

                                    <div className="flex flex-row">
                                        <MapPinHouse className="mr-1 font-bold" />
                                        <p style={{ fontFamily: "Lufga", fontWeight: 400 }} className="text-[#616161]">
                                            {tenant.address}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mr-2 h-[55px]">
                                <p className="text-right" style={{ fontFamily: "Lufga", fontWeight: 500 }}>
                                    {tenant.rent}
                                </p>

                                <div className="flex flex-row justify-center items-center"> <Clock4 size={20} />
                                    <p style={{ fontFamily: "Lufga", fontWeight: 400 }} className="text-[#616161] ml-2">
                                        {tenant.time}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default RentsHistory;
