import Input from "../common/Input";
import { Search } from "lucide-react";

function Topbar() {
    return (
        <>
            <div className="col-span-3 bg-[#FFFFFF] w-[90%] rounded-full flex justify-center items-center pl-[1vw]">
                <Search />
                <Input />
            </div>

            <div className="col-start-10 col-span-3 bg-[#FFFFFF] rounded-full w-[90%] ml-auto">

            </div>

            <div className="col-start-9 col-span-1 row-start-1 bg-[#FFFFFF] rounded-full">

            </div>
        </>
    )
}

export default Topbar;