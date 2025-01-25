import { FaCirclePlay } from "react-icons/fa6";
import HeaderImg from "../../assets/images/header_pic.png";
import Button from "../Common/Button";
function Header() {
  return (
    <div className="bg-primary-blue min-h-[785px] py-5">
      <div className="container">
        <div className="flex justify-between items-center flex-wrap lg:flex-nowrap gap-5">
          <div className="flex-1">
            <div className="flex flex-col gap-8">
              <h1 className="text-white text-[34px] md:text-[44px] xl:text-[64px] font-semibold leading-[44px] md:leading-[66px] xl:leading-[86px]">
                Complete your <span className="text-after-effect"> IELTS</span>{" "}
                preparation at home.
              </h1>
              <p className="text-[#F8F8FB] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] ">
                Get prepared to ace the competitive exams. It’s just so easy,
                you choose your path to score your destined one.
              </p>
              <div className="flex gap-10">
                <Button
                  text="Start Free Pack"
                  classes="bg-white text-primary-blue"
                />
                <div className="flex items-center gap-2 text-white">
                  <span className="">
                    <FaCirclePlay className="w-[52px] h-[52px]" />
                  </span>
                  <a href="" className="underline">
                    See how it’s work
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] lg:w-[50%]">
            <img src={HeaderImg} alt="Header Img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
