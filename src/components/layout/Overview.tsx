import Topbar from "./Topbar";
import PropertyAnalytics from "../analytics/PropertyAnalytics";
import RevenueCard from "../analytics/RevenueCard";
import ExpenseCard from "../analytics/ExpenseCard";
import RentsHistory from "../analytics/RentsHistory";
import PaidRents from "../analytics/PaidRents";

function Overview() {
  return (
    <div className="grid grid-cols-12 grid-rows-14 gap-[12px] px-[5vw] py-[1vw] w-full h-full">
      <Topbar />
      
      <h1 className="row-start-2 col-span-8 self-end-safe text-md sm:text-xl sm:col-span-8 md:text-2xl md:col-span-5 lg:text-3xl lg:col-span-4 xl:text-4xl font-lufga font-semibold text-text-primary">
        Real Estate
      </h1>

      <PropertyAnalytics />
      <RevenueCard />
      <ExpenseCard />
      <RentsHistory />
      <PaidRents />
    </div>
  );
}

export default Overview;
