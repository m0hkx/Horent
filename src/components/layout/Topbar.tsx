import Input from "../common/Input";
import { Moon, Search, Sun, ChevronDown } from "lucide-react";
import profile from "../../assets/profile.png";

const user: { name: string; email: string } = {
    name: "James Luther",
    email: "jjames243@gmail.com",
};


function Topbar() {
    return (
        <>
            <div className="col-span-3 bg-[#FFFFFF] w-[90%] rounded-full flex justify-center items-center pl-[1vw]">
                <Search />
                <Input />
            </div>

            <div className="col-start-10 col-span-3 flex items-center justify-between">
                {/* Theme toggle */}
                <div className="flex items-center space-x-2 bg-white rounded-full px-1 py-1">
                    <div className="bg-[#9366FF] rounded-full p-2.5">
                        <Sun color="white" />
                    </div>
                    <div className="bg-[#D9D9D9] rounded-full p-2.5">
                        <Moon />
                    </div>
                </div>

                {/* Profile card */}
                <div className="flex items-center bg-white rounded-full px-1 py-1">
                    <div className="w-11 h-11 rounded-full overflow-hidden mr-3">
                        <img
                            src={profile}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="flex flex-col">
                        <p className="font-medium text-sm">{user.name}</p>
                        <p className="text-gray-500 text-xs">{user.email}</p>
                    </div>

                    <div className="ml-3 pr-2">
                        <ChevronDown />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Topbar;