import Topbar from "./Topbar";
import Button from "../common/Button";
import { Plus } from "lucide-react";

function Proprietes() {
    return (
        <>
            <div className="grid grid-cols-12 grid-rows-14 gap-[12px] px-[5vw] py-[1vw] w-full h-full">
                <Topbar />

                <h1 className="row-start-2 col-span-8 self-end-safe text-md sm:text-xl sm:col-span-8 md:text-2xl md:col-span-5 lg:text-3xl lg:col-span-4 xl:text-4xl font-lufga font-semibold text-text-primary">
                    Property List
                </h1>

                <Button className="row-start-2 col-start-10 col-end-13 self-end-safe justify-self-end mr-6" variant="primary" size="md" leftIcon={<Plus size={20} />}>
                    Add Property
                </Button>

                <div className="bg-bg-white grid col-start-1 col-end-13 row-start-3 row-end-15 rounded-[40px] p-[1vw]">
                    {/* <div className="w-1/4 h-2/4 bg-bg-gray rounded-[40px]"></div> */}
                </div>
            </div>
        </>
    )
}

export default Proprietes;