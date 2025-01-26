import Course from "./Course";
import { BsArrowRight } from "react-icons/bs";
const Courses = () => {
  return (
    <div className="bg-[#e6eefa] py-24 mt-20">
      <div className="container">
        <h3 className="text-center text-[#1E266D] text-4xl lg:text-[44px] xl:text-[51px] font-semibold">
          Some popular courses
        </h3>
        <div className="flex flex-wrap justify-start items-center mt-24 gap-5">
          <Course />
          <Course />
          <Course />
        </div>
        <div className="w-full text-end">
          <button className="text-base lg:text-[22px] text-[#0052CC] font-semibold mr-auto border-b-2 border-[#0052CC]  mt-20 ml-auto cursor-pointer">
            <p className="flex gap-2 items-center">
              See All Packeage{" "}
              <span>
                <BsArrowRight className="text-[#0052CC]" />
              </span>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
