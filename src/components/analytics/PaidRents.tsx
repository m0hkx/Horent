import { ChevronDown } from "lucide-react";
import { paidData } from "../../data/Paid";

function PaidRents() {
    return (
        <>
            <div className="bg-[#FFFFFF] row-start-9 row-span-6 col-span-6 rounded-[40px] drop-shadow-[0_0_2px_rgba(0,0,0,0.25)] flex flex-col justify-between">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl p-7" style={{ fontFamily: 'Lufga', fontWeight: 500 }}>Rents Paid</h1>

                    <div className="border border-[#D9D9D9] w-35 h-12 rounded-full mr-7 flex items-center justify-between p-4 cursor-pointer">
                        <p className="text-[#616161]">Aug 2025</p>
                        <ChevronDown color="#616161" />
                    </div>
                </div>

                <div className="px-3 mx-auto overflow-x-auto no-scrollbar w-full">
                    <div className="grid grid-cols-[1fr_2fr_1fr_1fr] text-[#616161] text-l font-[Lufga] font-normal mb-3 px-4 text-center w-full">
                        <div>Client Name</div>
                        <div>Property Name</div>
                        <div>Rent</div>
                        <div>Status</div>
                    </div>


                    <div className="space-y-2">
                        {paidData.map((item) => (
                            <div key={item.id} className="grid grid-cols-[1fr_2fr_1fr_1fr] items-center p-4 text-center">
                                <div>{item.name}</div>
                                <div>{item.build}</div>
                                <div>${item.rent.toLocaleString()}</div>
                                <div>
                                    <span
                                        className={`font-medium px-3 py-1 rounded-full text-sm ${item.status
                                            ? "text-green-600 bg-green-200"
                                            : "text-yellow-600 bg-yellow-100"
                                            }`}
                                    >
                                        {item.status ? "Paid" : "Pending"}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default PaidRents;