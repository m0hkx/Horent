import Input from "../common/Input";
import { Moon, Search, Sun, ChevronDown } from "lucide-react";
import profile from "../../assets/profile.png";
import { useTheme } from "../../hooks";

const user: { name: string; email: string } = {
    name: "James Luther",
    email: "jjames243@gmail.com",
};

function Topbar() {
    const { isDark, setTheme } = useTheme();

    return (
        <>
            <div className="xl:col-span-3 lg:col-span-4 md:col-span-5 col-span-6 bg-bg-white w-[90%] rounded-full flex justify-center items-center pl-[1vw] shadow-card">
                <Search className="text-text-secondary" />
                <Input />
            </div>

            <div className="col-start-10 col-span-3 md:col-start-9 md:col-span-4 lg:col-start-8 lg:col-span-5 xl:col-start-7 xl:col-span-6 flex items-center justify-end gap-6">
                <div className="flex items-center justify-between gap-6">
                    {/* Theme toggle */}
                    <div className="flex items-center space-x-2 bg-bg-white rounded-full px-1 py-1 shadow-card">
                        <button
                            onClick={() => setTheme('light')}
                            className={`rounded-full p-2.5 transition-all duration-200 ${
                                !isDark 
                                    ? 'bg-primary text-white' 
                                    : 'bg-bg-hover text-text-secondary hover:text-text-primary'
                            }`}
                            aria-label="Switch to light mode"
                        >
                            <Sun size={20} />
                        </button>
                        <button
                            onClick={() => setTheme('dark')}
                            className={`rounded-full p-2.5 transition-all duration-200 ${
                                isDark 
                                    ? 'bg-primary text-white' 
                                    : 'bg-bg-hover text-text-secondary hover:text-text-primary'
                            }`}
                            aria-label="Switch to dark mode"
                        >
                            <Moon size={20} />
                        </button>
                    </div>

                    {/* Profile card */}
                    <div className="flex items-center bg-bg-white rounded-full px-1 py-1 hover:cursor-pointer shadow-card hover:shadow-lg transition-shadow duration-200">
                        <div className="w-11 h-11 rounded-full overflow-hidden mr-3">
                            <img
                                src={profile}
                                alt={`${user.name}'s profile`}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="flex flex-col">
                            <p className="font-lufga font-medium text-sm text-text-primary">{user.name}</p>
                            <p className="text-text-secondary text-xs font-lufga">{user.email}</p>
                        </div>

                        <div className="ml-3 pr-2 text-text-secondary">
                            <ChevronDown />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Topbar;
