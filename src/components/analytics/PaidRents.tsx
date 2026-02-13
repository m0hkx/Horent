import { ChevronDown } from "lucide-react";
import { paidData } from "../../data/Paid";

function PaidRents() {
  return (
    <div className="bg-bg-white row-start-9 row-span-6 col-span-6 rounded-[40px] shadow-card flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl p-7 font-lufga font-medium text-text-primary">
          Rents Paid
        </h2>

        <button className="border border-bg-hover w-35 h-12 rounded-full mr-7 flex items-center justify-between p-4 cursor-pointer hover:border-primary transition-colors duration-200 group">
          <p className="text-text-secondary font-lufga group-hover:text-primary transition-colors duration-200">Aug 2025</p>
          <ChevronDown color="currentColor" className="text-text-secondary group-hover:text-primary transition-colors duration-200" />
        </button>
      </div>

      <div className="px-3 mx-auto overflow-x-auto no-scrollbar w-full">
        <div className="grid grid-cols-[1fr_2fr_1fr_1fr] text-text-secondary text-base font-lufga font-normal mb-3 px-4 text-center w-full">
          <div>Client Name</div>
          <div>Property Name</div>
          <div>Rent</div>
          <div>Status</div>
        </div>

        <div className="space-y-2">
          {paidData.map((item) => (
            <div 
              key={item.id} 
              className="grid grid-cols-[1fr_2fr_1fr_1fr] items-center p-4 text-center hover:bg-bg-main rounded-radius-lg transition-colors duration-200 cursor-pointer"
            >
              <div className="font-lufga text-text-primary">{item.name}</div>
              <div className="font-lufga text-text-secondary">{item.build}</div>
              <div className="font-lufga font-medium text-text-primary">${item.rent.toLocaleString()}</div>
              <div>
                <span
                  className={`font-lufga font-medium px-3 py-1 rounded-full text-sm ${
                    item.status
                      ? "text-success bg-success-light"
                      : "text-warning bg-warning-light"
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
  );
}

export default PaidRents;
