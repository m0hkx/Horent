import { ChevronDown } from "lucide-react";
import { weeklyData } from "../../data/WeeklyStat";

function PropertyAnalytics() {
  return (
    <div className="rounded-[40px] bg-bg-white row-start-3 row-span-6 col-span-6 rounded-radius-card shadow-card flex flex-col">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl p-7 font-lufga font-medium text-text-primary">
          Property Analytics
        </h2>

        <button className="border border-bg-hover w-35 h-12 rounded-full mr-7 flex items-center justify-between p-4 cursor-pointer hover:border-primary transition-colors duration-200 group">
          <p className="text-text-secondary font-lufga group-hover:text-primary transition-colors duration-200">This Week</p>
          <ChevronDown color="currentColor" className="text-text-secondary group-hover:text-primary transition-colors duration-200" />
        </button>
      </div>

      <ul className="flex justify-between w-3/4 text-text-secondary pb-3 px-5 mx-auto flex-1 items-end font-lufga font-normal">
        {weeklyData.map((item) => (
          <li key={item.day} className="flex flex-col items-center justify-end h-full">
            <div className="relative w-10" style={{ height: `${item.containerHeight}%` }}>
              <div className="bg-bg-hover w-10 h-full rounded-full"></div>
              <div 
                className="absolute bottom-0 bg-primary w-10 rounded-full transition-all duration-500 hover:bg-primary-dark"
                style={{ height: `${item.valueHeight}%` }}
              ></div>
            </div>
            <p className="mt-2">{item.day}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PropertyAnalytics;
