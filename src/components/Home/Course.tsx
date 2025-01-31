import { FaRegBookmark, FaRegClock, FaStar } from "react-icons/fa";
import CourseImg from "../../assets/images/package_banner.jpg";
import Button from "../Common/Button";

const Course = () => {
  return (
    <div className=" bg-white rounded-3xl p-5">
      <div className="relative">
        <img className="rounded-tr-3xl rounded-tl-3xl" src={CourseImg} alt="" />
        <div className="bg-white w-[40px] h-[40px] flex justify-center items-center absolute top-5 right-5 rounded">
          <FaRegBookmark className="w-[14px] h-[18px] text-primary-blue" />
        </div>
        <div className="mt-10">
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <div className="flex gap-2">
                <span>
                  <FaStar className="text-[#f1b44c] w-[14px] h-[15px]" />
                </span>
                <span>
                  <FaStar className="text-[#f1b44c]  w-[14px] h-[15px]" />
                </span>
                <span>
                  <FaStar className="text-[#f1b44c]  w-[14px] h-[15px]" />
                </span>
                <span>
                  <FaStar className="text-[#f1b44c]  w-[14px] h-[15px]" />
                </span>
                <span>
                  <FaStar className="text-[#f1b44c]  w-[14px] h-[15px]" />
                </span>
              </div>
              <p className="text-xs text-[#74788D]">
                5.00 <span>(3)</span>
              </p>
            </div>
            <div className="bg-[#0052CC1A] px-2 py-1 rounded-full ">
              <p className="flex gap-2 items-center text-sm text-[#0052CC] font-semibold">
                <FaRegClock className="w-[16px] h-[16px]" /> <span>7 Days</span>
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-dark-slate text-xl font-semibold">
              Writing (General)
            </h3>
            <ul className="mt-3 flex flex-col gap-2">
              <li className="flex gap-3 items-center text-xs text-slate-blue">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1_3930)">
                    <path
                      d="M11.6484 4.11572H10.8984C10.7043 4.11572 10.5469 4.27313 10.5469 4.46728V9.62353C10.5469 9.81769 10.7043 9.97509 10.8984 9.97509H11.6484C11.8426 9.97509 12 9.81769 12 9.62353V4.46728C12 4.27313 11.8426 4.11572 11.6484 4.11572Z"
                      fill="#0052CC"
                    />
                    <path
                      d="M6.79987 1.89728L7.3858 0.882412C7.51525 0.65821 7.43842 0.371522 7.21422 0.242077L6.80828 0.00770243C6.58408 -0.121743 6.29739 -0.0449147 6.16797 0.179288L5.58203 1.19415L6.79987 1.89728Z"
                      fill="#0052CC"
                    />
                    <path
                      d="M0.417592 7.89795C0.618474 8.01247 0.87481 7.93768 0.990427 7.73743L3.86342 2.76127C3.59541 2.69759 3.30938 2.75424 3.08431 2.92303L2.08899 3.66952C1.79935 3.88676 1.55869 4.16257 1.38272 4.47898L0.104373 6.77764C-0.115072 7.17223 0.022576 7.6699 0.413584 7.89565C0.41492 7.89643 0.416256 7.89718 0.417592 7.89795Z"
                      fill="#0052CC"
                    />
                    <path
                      d="M2.50023 6.6977H4.02441L6.44429 2.50635L5.22643 1.80322L2.39844 6.70149C2.43212 6.69924 2.46598 6.6977 2.50023 6.6977Z"
                      fill="#0052CC"
                    />
                    <path
                      d="M1.13562 8.89307L0.771899 9.52307C0.754789 9.55269 0.74211 9.58466 0.734235 9.61796L0.398821 11.0367C0.334626 11.3082 0.662352 11.4974 0.865414 11.3061L1.92638 10.3063C1.95127 10.2828 1.97262 10.2558 1.98973 10.2262L2.27731 9.72807C1.77526 9.65335 1.35254 9.33275 1.13562 8.89307Z"
                      fill="#0052CC"
                    />
                    <path
                      d="M5.30197 9.74463H3.0812L2.61719 10.5483C2.76639 10.7029 2.97562 10.7993 3.20746 10.7993C3.66051 10.7993 4.02777 10.432 4.02777 9.97898C4.02777 10.432 4.39504 10.7993 4.84808 10.7993C5.30113 10.7993 5.66839 10.432 5.66839 9.97898V9.92543C5.58329 9.8865 5.38841 9.7875 5.30197 9.74463Z"
                      fill="#0052CC"
                    />
                    <path
                      d="M6.6966 3.4751L4.83606 6.69764H5.38843C5.58259 6.69764 5.74 6.85504 5.74 7.0492C5.74 7.24333 5.58264 7.40074 5.38848 7.40076H2.5C2.04695 7.40076 1.67969 7.76803 1.67969 8.22108C1.67969 8.67412 2.04695 9.04139 2.5 9.04139H5.46362L5.85245 9.23564C6.51784 9.56836 7.26317 9.74449 8.00785 9.74449C8.6248 9.74449 9.26256 9.62325 9.84158 9.39258V4.82257H9.28749L6.6966 3.4751Z"
                      fill="#0052CC"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_3930">
                      <rect width="12" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>1X Writing</span>
              </li>
              <li className="flex gap-3 items-center text-xs text-slate-blue">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M6.99984 1.16675C3.77984 1.16675 1.1665 3.78008 1.1665 7.00008C1.1665 10.2201 3.77984 12.8334 6.99984 12.8334C10.2198 12.8334 12.8332 10.2201 12.8332 7.00008C12.8332 3.78008 10.2198 1.16675 6.99984 1.16675ZM10.0623 7.47258C10.0623 7.57175 10.0565 7.66508 10.0448 7.75841C9.95734 8.79091 9.34484 9.30425 8.22484 9.30425H8.07317C7.97984 9.30425 7.8865 9.35091 7.82817 9.42675L7.36734 10.0392C7.16317 10.3134 6.8365 10.3134 6.63234 10.0392L6.1715 9.42675C6.119 9.36258 6.00817 9.30425 5.9265 9.30425H5.77484C4.55567 9.30425 3.93734 9.00091 3.93734 7.46675V5.93258C3.93734 4.81258 4.4565 4.20008 5.48317 4.11258C5.5765 4.10675 5.67567 4.10675 5.77484 4.10675H8.22484C9.444 4.10675 10.0623 4.71925 10.0623 5.94425V7.47258Z"
                    fill="#0052CC"
                  />
                </svg>
                <span>Review</span>
              </li>
            </ul>
          </div>
          <div className="bg-[#E1E1E1] w-full h-[1px] my-5"></div>
          <div className="flex justify-between items-center">
            <Button
              text="Add to cart"
              classes="text-white bg-primary-blue addToCardBtn"
            />
            <div className="flex flex-wrap justify-end gap-3">
              <p className="text-lg text-[#0052CC] font-semibold line-through">
                Tk. 400
              </p>
              <span className="text-dark-slate text-lg font-semibold">
                Tk. 00
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
