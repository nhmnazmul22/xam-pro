import { IoMdMail } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import XamProLogo from "../../assets/images/logo_2.png";
import MaccLogo from "../../assets/images/MAAC_logo.png";
import PaymentLogos from "../../assets/images/payments_logos.png";
function Footer() {
  return (
    <div className="bg-[#1B283A]">
      <div className="main-container">
        <div className="flex flex-col gap-10 justify-center py-5 min-h-[480px]">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-5 justify-between items-start pt-10 pb-5">
            <div className="max-w-[390px]">
              <img src={XamProLogo} alt="Logo" />
              <p className="text-white text-base lg:text-xl leading-[30px] mt-5">
                Need a solution for mockup exams? Or perhaps exam supervision?
                Xampro Is the answer.
              </p>
            </div>
            <div className="max-w-[505px]">
              <h4 className="text-white text-[22px] font-bold mb-5">
                Get in touch
              </h4>
              <div className="flex flex-col gap-5">
                <p className="flex items-start gap-3 text-white text-base lg:text-xl  leading-[30px]">
                  <span>
                    <IoLocationOutline className="w-[24px] h-[24px]" />
                  </span>
                  Registered Address: Ta-143/A, Moddho Badda (3rd Floor),
                  Gulshan, Badda, Dhaka-1212
                </p>
                <p className="flex items-start gap-3 text-white text-base lg:text-xl  leading-[30px]">
                  <span>
                    <IoLocationOutline className="w-[24px] h-[24px]" />
                  </span>
                  House 15, Road24, Gulshan- 2Dhaka-1212
                </p>
                <p className="flex items-start gap-3 text-white text-base lg:text-xl  leading-[30px]">
                  <span>
                    <IoMdMail className="w-[24px] h-[24px]" />
                  </span>
                  solutionmaac@gmail.com
                </p>
              </div>
            </div>
            <div className="max-w-[240px]">
              <h4 className="text-white text-[22px] font-bold mb-5">
                Want Some Insights?
              </h4>
              <div className="mt-8">
                <img width={127} src={MaccLogo} alt="" />
                <p className="text-white text-base lg:text-xl ">Insights</p>
              </div>
            </div>
          </div>
          <div className="hidden sm:block">
            <img className="w-full" src={PaymentLogos} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
