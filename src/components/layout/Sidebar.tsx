import { NavLink, Outlet } from "react-router";
import logo from "../../assets/logo.png";
import { PanelRightClose, Bolt, House, Users, CircleDollarSign, CircleUserRound, Settings } from "lucide-react";
import { motion } from "motion/react";

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

function NavItem({ to, icon, label }: NavItemProps) {
  return (
    <li className="w-3/4">
      <NavLink to={to}>
        {({ isActive }) => (
          <motion.div
            className="flex items-center gap-2 px-5 py-3 rounded-full cursor-pointer font-lufga font-normal"
            animate={{
              backgroundColor: isActive ? '#9366FF' : 'transparent',
              color: isActive ? '#fff' : 'var(--color-text-primary)'
            }}
            whileHover={{
              backgroundColor: isActive ? '#7B4FE6' : 'rgba(147, 102, 255, 0.1)',
            }}
            transition={{ duration: 0.2 }}
          >
            {icon}
            <span>{label}</span>
          </motion.div>
        )}
      </NavLink>
    </li>
  );
}

function Sidebar() {
  const homeNavItems: NavItemProps[] = [
    { to: "/", icon: <Bolt size={20} />, label: "Overview" },
    { to: "/proprietes", icon: <House size={20} />, label: "Properties" },
    { to: "/clients", icon: <Users size={20} />, label: "Clients" },
    { to: "/rents", icon: <CircleDollarSign size={20} />, label: "Rents" },
  ];

  const accountNavItems: NavItemProps[] = [
    { to: "/profile", icon: <CircleUserRound size={20} />, label: "Account" },
    { to: "/settings", icon: <Settings size={20} />, label: "Settings" },
  ];

  return (
    <div className="flex h-screen">
      <div className="w-[270px] bg-bg-white shadow-lg p-4 flex flex-col">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img className="w-[32px] h-[35px]" src={logo} alt="Horent logo" />
          <h1 className="text-2xl font-lufga font-bold text-text-primary">Horent</h1>
          <button 
            className="ml-auto hover:text-primary transition-colors duration-200 p-1 rounded-lg hover:bg-primary/10"
            aria-label="Collapse sidebar"
          >
            <PanelRightClose className="text-text-primary" />
          </button>
        </div>

        {/* Home Navigation */}
        <div className="mt-15">
          <p className="text-text-muted font-lufga font-normal text-sm uppercase tracking-wider">Home</p>
          <ul className="mt-5 flex flex-col gap-2">
            {homeNavItems.map((item) => (
              <NavItem key={item.to} {...item} />
            ))}
          </ul>
        </div>

        {/* Account Navigation */}
        <div className="mt-auto mb-4">
          <p className="text-text-muted font-lufga font-normal text-sm uppercase tracking-wider">Account</p>
          <ul className="mt-5 flex flex-col gap-2">
            {accountNavItems.map((item) => (
              <NavItem key={item.to} {...item} />
            ))}
          </ul>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto bg-bg-main">
        <Outlet />
      </div>
    </div>
  );
}

export default Sidebar;
