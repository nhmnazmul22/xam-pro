import { IoIosArrowForward } from "react-icons/io";
import Logo from "../../assets/images/logo_1.png";
import AfterLoginMenu from "./Navbar/AfterLoginMenu";
import MobileMenu from "./Navbar/MobileMenu";

function Navbar() {
  return (
    <div className="bg-white min-h-[80px] py-2">
      <div className="container">
        <div className="flex justify-between items-center">
          <img
            className="w-[100px] md:w-[128px] h-auto"
            src={Logo}
            alt="xam-pro"
          />
          <div className="flex justify-end items-center gap-5">
            <div className="hidden md:flex gap-2">
              <button className="flex gap-2 items-center text-[15px] md:text-[17px] cursor-pointer text-dark-slate">
                Exam Package <IoIosArrowForward className="text-dark-slate" />
              </button>
              <button className="text-[15px] md:text-[17px] cursor-pointer text-dark-slate">
                Free Test
              </button>
            </div>
            <div className="hidden md:block h-[30px] w-[2px] bg-[#DBE9FD]"></div>
            <div className=" relative cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M23.2867 10.4533C22.505 9.59 21.3267 9.08833 19.6934 8.91333V8.02666C19.6934 6.42833 19.0167 4.88833 17.8267 3.815C16.625 2.71833 15.0617 2.205 13.44 2.35666C10.6517 2.625 8.3067 5.32 8.3067 8.23666V8.91333C6.67336 9.08833 5.49503 9.59 4.71336 10.4533C3.5817 11.7133 3.6167 13.3933 3.74503 14.56L4.5617 21.0583C4.8067 23.3333 5.72836 25.6667 10.745 25.6667H17.255C22.2717 25.6667 23.1934 23.3333 23.4384 21.07L24.255 14.5483C24.3834 13.3933 24.4067 11.7133 23.2867 10.4533ZM13.6034 3.97833C14.77 3.87333 15.8784 4.235 16.7417 5.01666C17.5934 5.78666 18.0717 6.88333 18.0717 8.02666V8.84333H9.92836V8.23666C9.92836 6.16 11.6434 4.165 13.6034 3.97833ZM9.82336 15.3417H9.8117C9.17003 15.3417 8.64503 14.8167 8.64503 14.175C8.64503 13.5333 9.17003 13.0083 9.8117 13.0083C10.465 13.0083 10.99 13.5333 10.99 14.175C10.99 14.8167 10.465 15.3417 9.82336 15.3417ZM17.99 15.3417H17.9784C17.3367 15.3417 16.8117 14.8167 16.8117 14.175C16.8117 13.5333 17.3367 13.0083 17.9784 13.0083C18.6317 13.0083 19.1567 13.5333 19.1567 14.175C19.1567 14.8167 18.6317 15.3417 17.99 15.3417Z"
                  fill="#0052CC"
                />
              </svg>
              <p className="absolute text-[11px] p-1 h-[16px] w-[16px] rounded-full bg-[#CCE0FF] flex justify-center items-center top-[3px] right-[-4px]">
                0
              </p>
            </div>
            <div className="h-[30px] w-[2px] bg-[#DBE9FD]"></div>
            <div className="hidden md:block">
              <div className="flex gap-3">
                <button className="bg-primary-blue text-[14px] px-5 py-1 text-white rounded cursor-pointer">
                  Sing In
                </button>
                <button className="bg-[#CCE0FF] text-[14px] px-5 py-1 text-slate-600 hover:text-slate-700 duration-200 font-normal rounded cursor-pointer">
                  Registration
                </button>
              </div>
              <AfterLoginMenu />
            </div>
            <MobileMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
