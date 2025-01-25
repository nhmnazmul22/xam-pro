import { useRef } from "react";
import { FaBook } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

function MobileMenu() {
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const crossRef = useRef<HTMLDivElement>(null);

  // Show Mobile Menu
  const showMobileMenu = () => {
    if (menuRef.current?.classList.contains("hidden")) {
      menuRef.current.classList.remove("hidden");
    }
    if (crossRef.current?.classList.contains("hidden")) {
      crossRef.current.classList.remove("hidden");
    }
    hamburgerRef.current?.classList.add("hidden");
  };

  // Close Mobile Menu
  const closeMobileMenu = () => {
    if (hamburgerRef.current?.classList.contains("hidden")) {
      hamburgerRef.current.classList.remove("hidden");
    }
    menuRef.current?.classList.add("hidden");
    crossRef.current?.classList.add("hidden");
  };

  return (
    <div className="relative md:hidden">
      <div className="cursor-pointer">
        <div className="block" ref={hamburgerRef} onClick={showMobileMenu}>
          <RxHamburgerMenu className="text-[24px] text-black" />
        </div>
        <div ref={crossRef} onClick={closeMobileMenu} className="hidden">
          <RxCross1 className="text-[24px] text-black" />
        </div>
      </div>
      <div
        ref={menuRef}
        className="hidden menu absolute top-[40px] right-[4%] w-[220px] bg-white shadow-md p-5 border border-slate-200"
      >
        <ul className="flex flex-col gap-1">
          <button className="bg-primary-blue text-[14px] mb-2 px-5 py-1 text-white rounded cursor-pointer">
            Sing In
          </button>
          <button className="bg-[#CCE0FF] text-[14px] mb-2 px-5 py-1 text-slate-600 hover:text-slate-700 duration-200 font-normal rounded cursor-pointer">
            Registration
          </button>
          <li className="menuItem">
            <a href="" className="menuText">
              <FaBook className="menuIcon" />
              <span className=" hover:text-slate-700 duration-300">
                Exam Packages
              </span>
            </a>
          </li>
          <li className="menuItem ">
            <a href="" className="menuText">
              <IoMdAddCircleOutline className="menuIcon" />
              <span className=" hover:text-slate-700 duration-300">
                Create Package
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
