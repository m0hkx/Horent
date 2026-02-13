import { ChevronDown, Clock4, MapPinHouse } from "lucide-react";
import { Tenants } from "../../data/Tenants";

function RentsHistory() {
  return (
    <div className="rounded-[40px] bg-bg-white 2xl:row-start-7 2xl:row-span-8 xl:row-start-6 xl:row-span-9 md:row-start-5 md:row-span-10 col-start-7 col-span-6 shadow-card flex flex-col">
      <div className="flex justify-between items-center flex-shrink-0">
        <h2 className="text-2xl p-7 font-lufga font-medium text-text-primary">
          Rents History
        </h2>

        <button className="border border-bg-hover w-35 h-12 rounded-full mr-7 flex items-center justify-between p-4 cursor-pointer hover:border-primary transition-colors duration-200 group">
          <p className="text-text-secondary font-lufga group-hover:text-primary transition-colors duration-200">View All</p>
          <ChevronDown color="currentColor" className="text-text-secondary group-hover:text-primary transition-colors duration-200" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-2 no-scrollbar">
        {Tenants.map((tenant, index) => (
          <div 
            key={index} 
            className="w-[90%] bg-bg-main rounded-full h-18 flex items-center justify-between mx-auto my-3 px-3 hover:bg-bg-hover transition-colors duration-200 cursor-pointer"
          >
            <div className="flex flex-row">
              <img 
                src={tenant.avatar} 
                className="w-[55px] h-[55px] rounded-full self-center mr-4 object-cover" 
                alt={`${tenant.name}'s avatar`} 
              />

              <div>
                <p className="font-lufga font-medium text-text-primary">
                  {tenant.name}
                </p>

                <div className="flex flex-row items-center text-text-secondary">
                  <MapPinHouse className="mr-1 font-bold" size={16} />
                  <p className="font-lufga font-normal text-sm">
                    {tenant.address}
                  </p>
                </div>
              </div>
            </div>

            <div className="mr-2 h-[55px] flex flex-col justify-center">
              <p className="text-right font-lufga font-medium text-text-primary">
                {tenant.rent}
              </p>

              <div className="flex flex-row justify-center items-center text-text-secondary">
                <Clock4 size={16} />
                <p className="font-lufga font-normal text-sm ml-2">
                  {tenant.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RentsHistory;
