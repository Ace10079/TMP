import { IconBell, IconSearch } from "@tabler/icons-react";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="h-20 text-sm flex justify-end md:p-4 gap-2">
      <div className="flex bg-white gap-2 p-2 items-center rounded-full relative">
        {/* Search Bar */}
        <div className="relative bg-[#EFEFEF] rounded-full">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-full border-gray-300 px-3 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <IconSearch className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
        </div>

        {/* Notification Bell */}
        <div className="rounded-full p-1 bg-[#EFEFEF]">
          <IconBell />
        </div>

        <div>Profile Name</div>

        {/* Profile Dropdown */}
        <div ref={dropdownRef} className="relative">
          <div
            className="rounded-full p-1 bg-[#EFEFEF] cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            KA
          </div>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute z-50 right-0 mt-2 top-10 bg-[#DBE9FF] w-40 shadow-lg rounded-lg p-2">
              <div className="p-2 cursor-pointer" onClick={() => navigate("/dashboard/editprofile")}>
                Edit Profile
              </div>
              <div className="p-2 cursor-pointer" onClick={() => setLogoutModalOpen(true)}>
                Logout
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {logoutModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50">
     
          <div className="bg-white p-10 rounded-lg shadow-lg flex flex-col justify-center items-center">
          <img src="/logout.png" alt="" className="h-50 w-50"/>
            <p>Are you sure you want to logout?</p>
            <div className="flex justify-end gap-2 mt-4">
              <button className="px-4 py-2 bg-gray-300 rounded" onClick={() => setLogoutModalOpen(false)}>
                Cancel
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={() => navigate("/login")}>
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
