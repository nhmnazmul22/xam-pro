import { FaBook, FaHome, FaRegUserCircle } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoMdAddCircleOutline,
} from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { LuNotebookText } from "react-icons/lu";
import { MdLockOutline } from "react-icons/md";
import { RiDraftFill } from "react-icons/ri";

import { useRef } from "react";
import Avatar from "../../../assets/images/avatar.jpg";

function AfterLoginMenu() {
  const subTextRef = useRef<HTMLUListElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle Menu
  const handleMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.toggle("hidden");
    }
  };

  // Handle Submenu text
  const handleSubMenuText = () => {
    if (subTextRef.current) {
      subTextRef.current.classList.toggle("hidden");
    }
  };

  return (
    <div className="relative hidden">
      <div
        onClick={handleMenu}
        className="flex gap-2 items-center cursor-pointer"
      >
        <img
          className="w-[40px] h-[40px] rounded-full object-cover"
          src={Avatar}
          alt="Avatar"
        />

        <p className="flex gap-2 items-center text-slate-gray">
          Esther <IoIosArrowDown className="text-slate-gray" />
        </p>
      </div>
      <div
        ref={menuRef}
        className="hidden menu absolute top-[60px] right-[4%] w-[250px] bg-white shadow-md py-3 border border-slate-200"
      >
        <ul className="flex flex-col gap-1">
          <li className="menuItem group hover:bg-primary-blue duration-300">
            <a href="" className="menuText">
              <FaHome className="menuIcon" /> <span>Dashboard</span>
            </a>
          </li>
          <li className="md:hidden menuItem group hover:bg-primary-blue duration-300">
            <button
              onClick={handleSubMenuText}
              className="menuText cursor-pointer"
            >
              <LuNotebookText className="menuIcon" />{" "}
              <span className="flex gap-2 items-center">
                Exam Packages
                <IoIosArrowForward className="menuIcon w-[20px]" />
              </span>
            </button>
            <ul
              ref={subTextRef}
              className="bg-white group p-1 mt-2 flex-col gap-2 border border-slate-200 hidden"
            >
              <li className="subMenuText">Free Test</li>
              <li className="subMenuText">Free Test</li>
            </ul>
          </li>
          <li className="menuItem group hover:bg-primary-blue duration-300">
            <a href="" className="menuText">
              <FaBook className="menuIcon" />
              <span>My Packages</span>
            </a>
          </li>
          <li className="menuItem group hover:bg-primary-blue duration-300">
            <a href="" className="menuText">
              <FaRegBookmark className="menuIcon" />
              <span>Favorite Courses</span>
            </a>
          </li>
          <li className="menuItem group hover:bg-primary-blue duration-300">
            <a href="" className="menuText">
              <IoMdAddCircleOutline className="menuIcon" />
              <span>Create Package</span>
            </a>
          </li>
          <li className="menuItem group hover:bg-primary-blue duration-300">
            <a href="" className="menuText">
              <RiDraftFill className="menuIcon" />
              <span>Draft Packages</span>
            </a>
          </li>
          <li className="menuItem group hover:bg-primary-blue duration-300">
            <a href="" className="menuText">
              <MdLockOutline className="menuIcon" />
              <span>Leaderboard</span>
            </a>
          </li>
          <li className="menuItem group hover:bg-primary-blue duration-300">
            <a href="" className="menuText">
              <FaRegUserCircle className="menuIcon" />
              <span>Profile</span>
            </a>
          </li>
          <li className="menuItem group hover:bg-primary-blue duration-300">
            <a href="" className="menuText">
              {" "}
              <MdLockOutline className="menuIcon" />
              <span>Password Change</span>
            </a>
          </li>
          <li className="w-full h-[1px] bg-slate-gray"></li>
          <li className="menuItem group hover:bg-primary-blue duration-300">
            <a href="" className="menuText">
              {" "}
              <IoLogOutOutline className="menuIcon" />
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AfterLoginMenu;
