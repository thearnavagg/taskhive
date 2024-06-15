import React from "react";
import { MdOutlineSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSidebar } from "../Controller/redux/slices/authSlice";
import UserAvatar from "./UserAvatar";
import NotificationPanel from "./NotificationPanel";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav className="flex justify-between items-center bg-white px-4 py-3 2xl:py-4 sticky z-10 top-0 shadow-sm">
      <div className="flex gap-4 items-center">
        <button
          onClick={() => dispatch(setOpenSidebar(true))}
          className="text-2xl text-gray-500 block md:hidden"
        >
          ☰
        </button>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-lg flex items-center py-2 px-3 gap-2 rounded-full bg-[#f3f4f6] border border-gray-300 transition duration-300 ease-in-out hover:shadow-lg focus-within:shadow-lg">
          <MdOutlineSearch className="text-gray-500 text-xl" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 outline-none bg-transparent placeholder:text-gray-500 text-gray-800"
          />
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <NotificationPanel />
        <div className="relative">
          {/* Dropdown menu */}
          <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20 hidden">
            {/* Dropdown links */}
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Logout
            </a>
          </div>
        </div>
        <UserAvatar />
      </div>
    </nav>
  );
};

export default Navbar;
