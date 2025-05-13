import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  IconLayoutDashboard,
  IconBrandMyOppo,
  IconUsers,
  IconListTree,
  IconTableShare,
  IconFocus2,
  IconWallet,
  IconMessageReport,
  IconSettings,
  IconMenu2, // hamburger
  IconX, // close icon
} from "@tabler/icons-react";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isOpen, setIsOpen] = useState(true); // sidebar toggle state

  const menuItems = [
    { name: "Dashboard", icon: <IconLayoutDashboard stroke={2} />, path: "cards" },
    { name: "Lead Management", icon: <IconBrandMyOppo stroke={2} />, path: "leadmanagement" },
    { name: "Students", icon: <IconUsers stroke={2} />, path: "students" },
    { name: "Subscribers", icon: <IconListTree stroke={2} />, path: "subscribers" },
    { name: "Experiment", icon: <IconTableShare stroke={2} />, path: "experiment" },
    { name: "Leaderboard", icon: <IconFocus2 stroke={2} />, path: "leaderboard" },
    { name: "Packages", icon: <IconWallet stroke={2} />, path: "packages" },
    { name: "Report", icon: <IconMessageReport stroke={2} />, path: "report" },
    { name: "Settings", icon: <IconSettings stroke={2} />, path: "setting" },
  ];

  useEffect(() => {
    const currentPath = location.pathname.split("/").pop();
    const activeMenu = menuItems.find((item) => item.path === currentPath)?.name || "Dashboard";
    setActiveItem(activeMenu);
  }, [location.pathname]);

  const handleItemClick = (itemName, path) => {
    setActiveItem(itemName);
    navigate(`/dashboard/${path}`);
  };

  return (
    <>
      {/* Toggle Button for Mobile */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IconX size={30} /> : <IconMenu2 size={30} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`bg-white h-screen fixed top-0 left-0 z-40 transform transition-all duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} w-50 md:translate-x-0 md:static`}
      >
       <div className="text-xs h-screen bg-white">
       <div className="flex justify-center">
  <img src="/logo.png" alt="Logo" className="h-25 w-30" />
</div>
          <ul className="mt-4">
            {menuItems.map((item, index) => (
              <li key={index} className="mb-1">
                <button
                  className={`text-center flex items-center gap-1 px-7 py-0.5 hover:bg-orange-600 w-full ${
                    activeItem === item.name ? "bg-orange-600 text-white" : ""
                  }`}
                  onClick={() => handleItemClick(item.name, item.path)}
                >
                  <span
                    className={`p-1 rounded ${
                      activeItem === item.name ? "bg-[#151C39] text-white" : ""
                    }`}
                  >
                    {item.icon}
                  </span>
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
