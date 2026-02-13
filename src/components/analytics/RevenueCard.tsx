import { BanknoteArrowUp, MoveUp } from "lucide-react";

function RevenueCard() {
    return (
        <>
            <div className="bg-[#FFFFFF] 2xl:row-start-3 2xl:row-span-4 xl:row-start-3 xl:row-span-3 md:row-start-3 md:row-span-2 sm:row-start-3 sm:row-span-2 col-start-7 col-span-3 rounded-[40px] drop-shadow-[0_0_2px_rgba(0,0,0,0.25)] flex flex-col justify-between">
                <div className="flex items-center 2xl:py-5 2xl:px-10 xl:py-3 xl:px-5 xl:justify-center md:py-3 md:px-5 md:justify-center sm:py-2 sm:px-3 sm:justify-center">
                    <div className="bg-[#EFEFEF] rounded-full w-[3vw] h-[3vw] flex items-center justify-center mr-5 max-xl:hidden">
                        <BanknoteArrowUp className="w-[1.9vw] h-[1.9vw]" />
                    </div>

                    <p className="2xl:text-2xl lg:text-lg md:text-sm sm:text-xs" style={{ fontFamily: 'Lufga', fontWeight: 500 }}>Total Revenue</p>
                </div>

                <div className="flex items-center justify-around mb-6">
                    <p className="2xl:text-3xl xl:text-xl lg:text-lg md:text-md sm:text-sm" style={{ fontFamily: 'Lufga', fontWeight: 600 }}>$32,125.00</p>

                    <div className="border border-[#D9D9D9] 2xl:w-26 2xl:h-12 xl:w-20 xl:h-10 md:w-16 md:h-8 sm:w-12 sm:h-6 rounded-full flex items-center justify-around">
                        <p className="text-[#616161] 2xl:text-lg xl:text-md md:text-sm sm:text-xs" style={{ fontFamily: 'Lufga', fontWeight: 400 }}>+12.0%</p>
                        <div className="2xl:w-8 2xl:h-8 xl:w-6 xl:h-6 md:w-4 md:h-4 sm:w-3 sm:h-3 rounded-full bg-[#3FCE1C] flex items-center justify-center">
                            <MoveUp size={20} color="#FFFFFF" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RevenueCard;