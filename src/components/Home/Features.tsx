import { BsArrowRight } from "react-icons/bs";
import FeatureImg_1 from "../../assets/images/feature-1.svg";
import FeatureImg_2 from "../../assets/images/feature-2.svg";
import FeatureImg_3 from "../../assets/images/feature-3.svg";
import FeatureImg_4 from "../../assets/images/feature-4.svg";
import { Feature } from "../../types/types";
import Button from "../Common/Button";

// Features Object
const features: Feature = [
  {
    icon: FeatureImg_1,
    title: "Full exam Packages",
    description:
      "IELTS general & academic Speaking, reading, writing full mock module",
  },
  {
    icon: FeatureImg_2,
    title: "Instant Result",
    description:
      "IELTS general & academic Speaking, reading, writing full mock module",
  },
  {
    icon: FeatureImg_3,
    title: "Check Performance",
    description:
      "IELTS general & academic Speaking, reading, writing full mock module",
  },
  {
    icon: FeatureImg_4,
    title: "Facilitator Review",
    description:
      "IELTS general & academic Speaking, reading, writing full mock module",
  },
];

function Features() {
  return (
    <div className="py-10 mt-30">
      <div className="main-container shadow-[5px_5px_64px_160px_#0052cc07] bg-[#0052cc07] rounded-[20%]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-primary-blue rounded-[24px] min-h-[384px] flex justify-start p-10 lg:px-20 lg:py-10 items-center">
            <div className="max-w-[533px]">
              <h1 className="text-white text-3xl sm:text-4xl lg:text-[44px] xl:text-[51px] mb-5 font-semibold">
                Our spacial features for students
              </h1>
              <Button
                text="See Features"
                classes="bg-white text-primary-blue"
              />
            </div>
          </div>

          {features.map((feature, index) => (
            <div
              key={index.toString()}
              className="bg-white p-8 xl:p-10 rounded-[24px] shadow-shadow-[2px_2px_0px_10px_#0052CC0F]"
            >
              <div className="mb-5">
                <img
                  className="w-[80px] h-auto lg:w-auto"
                  src={feature.icon}
                  alt="feature"
                />
              </div>
              <div className="mb-5">
                <h3 className="text-primary-blue text-2xl xl:text-[30px] font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-blue text-base xl:text-[20px] ">
                  {feature.description}
                </p>
              </div>
              <button className="flex gap-3 items-center ml-auto cursor-pointer text-[20px] text-dark-slate">
                More <BsArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
