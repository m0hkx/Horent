import Topbar from "./Topbar";
import { BanknoteArrowUp, BanknoteArrowDown, ChevronDown, MoveUp, MoveDown, MapPinHouse, Clock4 } from "lucide-react";
import { faker } from '@faker-js/faker';

function Overview() {
    return (
        <>
            <div className="grid grid-cols-12 grid-rows-14 gap-[12px] px-[5vw] py-[1vw] w-full h-full">
                <Topbar />
                <h1
                    className="row-start-2 col-span-8 self-end-safe text-md sm:text-xl sm:col-span-8 md:text-2xl md:col-span-5 lg:text-3xl lg:col-span-4 xl:text-4xl"
                    style={{ fontFamily: 'Lufga', fontWeight: 600 }}
                >
                    Real Estate
                </h1>

                <div className="bg-[#FFFFFF] row-start-3 row-span-6 col-span-6 rounded-[40px] drop-shadow-[0_0_2px_rgba(0,0,0,0.25)] flex flex-col">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl p-7" style={{ fontFamily: 'Lufga', fontWeight: 500 }}>Property Analytics</h1>

                        <div className="border border-[#D9D9D9] w-35 h-12 rounded-full mr-7 flex items-center justify-between p-4 cursor-pointer">
                            <p className="text-[#616161]">This Week</p>
                            <ChevronDown color="#616161" />
                        </div>
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

                <div className="bg-[#FFFFFF] 2xl:row-start-3 2xl:row-span-4 xl:row-start-3 xl:row-span-3 md:row-start-3 md:row-span-2 sm:row-start-3 sm:row-span-2 col-start-10 col-span-3 rounded-[40px] drop-shadow-[0_0_2px_rgba(0,0,0,0.25)] flex flex-col justify-between">
                    <div className="flex items-center 2xl:py-5 2xl:px-10 xl:py-3 xl:px-5 xl:justify-center md:py-3 md:px-5 md:justify-center sm:py-2 sm:px-3 sm:justify-center">
                        <div className="bg-[#EFEFEF] rounded-full w-[3vw] h-[3vw] flex items-center justify-center mr-5 max-xl:hidden">
                            <BanknoteArrowDown className="w-[1.9vw] h-[1.9vw]" />
                        </div>

                        <p className="2xl:text-2xl lg:text-lg md:text-sm sm:text-xs" style={{ fontFamily: 'Lufga', fontWeight: 500 }}>Total Expanses</p>
                    </div>

                    <div className="flex items-center justify-around mb-6">
                        <p className="2xl:text-3xl xl:text-xl lg:text-lg md:text-md sm:text-sm" style={{ fontFamily: 'Lufga', fontWeight: 600 }}>$16,650.00</p>

                        <div className="border border-[#D9D9D9] 2xl:w-26 2xl:h-12 xl:w-20 xl:h-10 md:w-16 md:h-8 sm:w-12 sm:h-6 rounded-full flex items-center justify-around">
                            <p className="text-[#616161] 2xl:text-lg xl:text-md md:text-sm sm:text-xs" style={{ fontFamily: 'Lufga', fontWeight: 400 }}>-6.7%</p>
                            <div className="2xl:w-8 2xl:h-8 xl:w-6 xl:h-6 md:w-4 md:h-4 sm:w-3 sm:h-3 rounded-full bg-[#FF8317] flex items-center justify-center">
                                <MoveDown size={20} color="#FFFFFF" />
                            </div>
                        </div>
                    </div>
                </div>

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

                    <div className="flex-1 overflow-y-auto px-2">
                        <div className="w-[90%] bg-[#F1F1F1] rounded-full h-18 flex items-center justify-between mx-auto my-3 px-3">
                            <div className="flex flex-row justify-self-start">
                                <img src={faker.image.avatar()} className="w-[55px] h-[55px] rounded-full flex self-center mr-4" alt="" />
                                <div>
                                    <p style={{ fontFamily: 'Lufga', fontWeight: 500 }}>{faker.person.fullName()}</p>
                                    <div className="flex flex-row">
                                        <MapPinHouse className="mr-1 font-bold" />
                                        <p style={{ fontFamily: 'Lufga', fontWeight: 400 }} className="text-[#616161]">Syracuse, Connecticut 35624</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mr-2">
                                <p className="text-right" style={{ fontFamily: 'Lufga', fontWeight: 500 }}>$1,200</p>
                                <div className="flex flex-row justify-center items-center">
                                    <Clock4 size={20} />
                                    <p style={{ fontFamily: 'Lufga', fontWeight: 400 }} className="text-[#616161] ml-2">1 Week Ago</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-[90%] bg-[#F1F1F1] rounded-full h-18 flex items-center justify-between mx-auto my-4 px-3">
                            <div className="flex flex-row justify-self-start">
                                <img src={faker.image.avatar()} className="w-[55px] h-[55px] rounded-full flex self-center mr-4" alt="" />
                                <div>
                                    <p style={{ fontFamily: 'Lufga', fontWeight: 500 }}>{faker.person.fullName()}</p>
                                    <div className="flex flex-row">
                                        <MapPinHouse className="mr-1" />
                                        <p style={{ fontFamily: 'Lufga', fontWeight: 400 }} className="text-[#616161]">Rd. Santa Ana, Illinois 85486</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mr-2">
                                <p className="text-right" style={{ fontFamily: 'Lufga', fontWeight: 500 }}>$3,500</p>
                                <div className="flex flex-row justify-center items-center">
                                    <Clock4 size={20} />
                                    <p style={{ fontFamily: 'Lufga', fontWeight: 400 }} className="text-[#616161] ml-2">2 Week Ago</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-[90%] bg-[#F1F1F1] rounded-full h-18 flex items-center justify-between mx-auto my-4 px-3">
                            <div className="flex flex-row justify-self-start">
                                <img src={faker.image.avatar()} className="w-[55px] h-[55px] rounded-full flex self-center mr-4" alt="" />
                                <div>
                                    <p style={{ fontFamily: 'Lufga', fontWeight: 500 }}>{faker.person.fullName()}</p>
                                    <div className="flex flex-row">
                                        <MapPinHouse className="mr-1" />
                                        <p style={{ fontFamily: 'Lufga', fontWeight: 400 }} className="text-[#616161]">Dr. Richardson, California 62639</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mr-2">
                                <p className="text-right" style={{ fontFamily: 'Lufga', fontWeight: 500 }}>$2,500</p>
                                <div className="flex flex-row justify-center items-center">
                                    <Clock4 size={20} />
                                    <p style={{ fontFamily: 'Lufga', fontWeight: 400 }} className="text-[#616161] ml-2">2 Week Ago</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-[90%] bg-[#F1F1F1] rounded-full h-18 flex items-center justify-between mx-auto my-4 px-3">
                            <div className="flex flex-row justify-self-start">
                                <img src={faker.image.avatar()} className="w-[55px] h-[55px] rounded-full flex self-center mr-4" alt="" />
                                <div>
                                    <p style={{ fontFamily: 'Lufga', fontWeight: 500 }}>{faker.person.fullName()}</p>
                                    <div className="flex flex-row">
                                        <MapPinHouse className="mr-1" />
                                        <p style={{ fontFamily: 'Lufga', fontWeight: 400 }} className="text-[#616161]">St. Utica, Pennsylvania 57867</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mr-2">
                                <p className="text-right" style={{ fontFamily: 'Lufga', fontWeight: 500 }}>$1,500</p>
                                <div className="flex flex-row justify-center items-center">
                                    <Clock4 size={20} />
                                    <p style={{ fontFamily: 'Lufga', fontWeight: 400 }} className="text-[#616161] ml-2">3 Week Ago</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-[90%] bg-[#F1F1F1] rounded-full h-18 flex items-center justify-between mx-auto my-4 px-3">
                            <div className="flex flex-row justify-self-start">
                                <img src={faker.image.avatar()} className="w-[55px] h-[55px] rounded-full flex self-center mr-4" alt="" />
                                <div>
                                    <p style={{ fontFamily: 'Lufga', fontWeight: 500 }}>{faker.person.fullName()}</p>
                                    <div className="flex flex-row">
                                        <MapPinHouse className="mr-1" />
                                        <p style={{ fontFamily: 'Lufga', fontWeight: 400 }} className="text-[#616161]">St. Celina, Delaware 10299</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mr-2">
                                <p className="text-right" style={{ fontFamily: 'Lufga', fontWeight: 500 }}>$2,000</p>
                                <div className="flex flex-row justify-center items-center">
                                    <Clock4 size={20} />
                                    <p style={{ fontFamily: 'Lufga', fontWeight: 400 }} className="text-[#616161] ml-2">1 Months Ago</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-[90%] bg-[#F1F1F1] rounded-full h-18 flex items-center justify-between mx-auto my-4 px-3">
                            <div className="flex flex-row justify-self-start">
                                <img src={faker.image.avatar()} className="w-[55px] h-[55px] rounded-full flex self-center mr-4" alt="" />
                                <div>
                                    <p style={{ fontFamily: 'Lufga', fontWeight: 500 }}>{faker.person.fullName()}</p>
                                    <div className="flex flex-row">
                                        <MapPinHouse className="mr-1" />
                                        <p style={{ fontFamily: 'Lufga', fontWeight: 400 }} className="text-[#616161]">Cir. Shiloh, Hawaii 81063</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mr-2">
                                <p className="text-right" style={{ fontFamily: 'Lufga', fontWeight: 500 }}>$3,000</p>
                                <div className="flex flex-row justify-center items-center">
                                    <Clock4 size={20} />
                                    <p style={{ fontFamily: 'Lufga', fontWeight: 400 }} className="text-[#616161] ml-2">2 Months Ago</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="bg-[#FFFFFF] row-start-9 row-span-6 col-span-6 rounded-[40px] drop-shadow-[0_0_2px_rgba(0,0,0,0.25)] flex flex-col justify-between">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl p-7" style={{ fontFamily: 'Lufga', fontWeight: 500 }}>Rents Paid</h1>

                        <div className="border border-[#D9D9D9] w-35 h-12 rounded-full mr-7 flex items-center justify-between p-4 cursor-pointer">
                            <p className="text-[#616161]">Aug 2025</p>
                            <ChevronDown color="#616161" />
                        </div>
                    </div>

                    <div className="px-3 mx-auto overflow-x-auto w-full">
                        <div className="grid grid-cols-[1fr_2fr_1fr_1fr] text-[#616161] text-l font-[Lufga] font-normal mb-3 px-4 text-center w-full">
                            <div>Client Name</div>
                            <div>Property Name</div>
                            <div>Rent</div>
                            <div>Status</div>
                        </div>


                        <div className="space-y-2">
                            <div className="grid grid-cols-[1fr_2fr_1fr_1fr] items-center p-4 text-center">
                                <div>James Martin</div>
                                <div>Home Build 1</div>
                                <div>$1,000</div>
                                <div>
                                    <span className="text-green-600 font-medium bg-green-200 px-3 py-1 rounded-full text-sm">
                                        Paid
                                    </span>
                                </div>
                            </div>

                            <div className="grid grid-cols-[1fr_2fr_1fr_1fr] items-center p-4 text-center">
                                <div>Michel Sannter</div>
                                <div>Card View</div>
                                <div>$1,500</div>
                                <div>
                                    <span className="text-yellow-600 font-medium bg-yellow-100 px-3 py-1 rounded-full text-sm">
                                        Pending
                                    </span>
                                </div>
                            </div>

                            <div className="grid grid-cols-[1fr_2fr_1fr_1fr] items-center p-4 text-center">
                                <div>Carl Jonson</div>
                                <div>Home Build 2</div>
                                <div>$1,000</div>
                                <div>
                                    <span className="text-yellow-600 font-medium bg-yellow-100 px-3 py-1 rounded-full text-sm">
                                        Pending
                                    </span>
                                </div>
                            </div>

                            <div className="grid grid-cols-[1fr_2fr_1fr_1fr] items-center p-4 text-center">
                                <div>Wade Warren</div>
                                <div>Home Build 1</div>
                                <div>$1,000</div>
                                <div>
                                    <span className="text-green-600 font-medium bg-green-200 px-3 py-1 rounded-full text-sm">
                                        Paid
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Overview;