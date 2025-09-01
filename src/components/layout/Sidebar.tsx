import { NavLink, Outlet } from "react-router";
import logo from "../../assets/logo.png";
import { PanelRightClose, Bolt, House, Users, CircleDollarSign, CircleUserRound, Settings } from "lucide-react";
import { motion } from "motion/react";

function Sidebar() {
  return (
    <div className="flex h-screen">
      <div className="w-[270px] bg-white shadow-md p-4">
        <div className="flex items-center gap-4">
          <img className="w-[32px] h-[35px]" src={logo} alt="logo" />
          <h1 className="text-2xl font-bold" style={{ fontFamily: 'Lufga', fontWeight: 700 }}>Horent</h1>

          <PanelRightClose className="ml-auto hover:cursor-pointer" />
        </div>

        <div className="mt-15">
          <p className="text-[#6E6E6E]" style={{ fontFamily: 'Lufga', fontWeight: 400 }}>HOME</p>
          <ul className="mt-5 flex flex-col gap-2" style={{ fontFamily: 'Lufga', fontWeight: 400 }}>
            <li className="w-3/4">
              <NavLink to="/">
                {({ isActive }) => (
                  <motion.div
                    className="flex items-center gap-2 px-5 py-3 rounded-full cursor-pointer"
                    animate={{
                      backgroundColor: isActive ? '#9366FF' : 'transparent',
                      color: isActive ? '#fff' : '#000'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Bolt />
                    <span>Overview</span>
                  </motion.div>
                )}
              </NavLink>
            </li>

            <li className="w-3/4">
              <NavLink to="/proprietes">
                {({ isActive }) => (
                  <motion.div
                    className="flex items-center gap-2 px-5 py-3 rounded-full cursor-pointer"
                    animate={{
                      backgroundColor: isActive ? '#9366FF' : 'transparent',
                      color: isActive ? '#fff' : '#000'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <House />
                    <span>Properties</span>
                  </motion.div>
                )}
              </NavLink>

            </li>

            <li className="w-3/4">
              <NavLink to="/clients">
                {({ isActive }) => (
                  <motion.div
                    className="flex items-center gap-2 px-5 py-3 rounded-full cursor-pointer"
                    animate={{
                      backgroundColor: isActive ? '#9366FF' : 'transparent',
                      color: isActive ? '#fff' : '#000'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Users />
                    <span>Clients</span>
                  </motion.div>
                )}
              </NavLink>

            </li>

            <li className="w-3/4">
              <NavLink to="/rents">
                {({ isActive }) => (
                  <motion.div
                    className="flex items-center gap-2 px-5 py-3 rounded-full cursor-pointer"
                    animate={{
                      backgroundColor: isActive ? '#9366FF' : 'transparent',
                      color: isActive ? '#fff' : '#000'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <CircleDollarSign />
                    <span>Locations</span>
                  </motion.div>
                )}
              </NavLink>
            </li>
          </ul>

        </div>

        <div className="mt-40">
          <p className="text-[#6E6E6E]" style={{ fontFamily: 'Lufga', fontWeight: 400 }}>ACCOUNT</p>
          <ul className="mt-5 flex flex-col gap-2" style={{ fontFamily: 'Lufga', fontWeight: 400 }}>
            <li className="w-3/4">
              <NavLink to="/profile">
                {({ isActive }) => (
                  <motion.div
                    className="flex items-center gap-2 px-5 py-3 rounded-full cursor-pointer"
                    animate={{
                      backgroundColor: isActive ? '#9366FF' : 'transparent',
                      color: isActive ? '#fff' : '#000'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <CircleUserRound />
                    <span>Account</span>
                  </motion.div>
                )}
              </NavLink>
            </li>

            <li className="w-3/4">
              <NavLink to="/settings">
                {({ isActive }) => (
                  <motion.div
                    className="flex items-center gap-2 px-5 py-3 rounded-full cursor-pointer"
                    animate={{
                      backgroundColor: isActive ? '#9366FF' : 'transparent',
                      color: isActive ? '#fff' : '#000'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Settings />
                    <span>Settings</span>
                  </motion.div>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
  <Outlet />
</div>
    </div>
  );
}

export default Sidebar;