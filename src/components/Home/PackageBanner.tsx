import PackageImg from "../../assets/images/package_img.png";
import Button from "../Common/Button";
function PackageBanner() {
  return (
    <div className="main-container">
      <div className="grid grid-cols-[1fr] lg:grid-cols-[466px_1fr] items-center py-20 lg:py-10 gap-5 lg:gap-0">
        <div className="">
          <h2 className="text-[#1E266D] text-4xl sm:text-5xl xl:text-[51px] lg:leading-[60px] xl:leading-[76px] font-bold">
            Create your own package
          </h2>
          <p className="text-slate-blue text-sm sm:text-base xl:text-[20px] leading-[28px] xl:leading-[32px] my-5 xl:my-10">
            If you wish to purchase a combo package, you can choose your own
            selections from this page and purchase it.
          </p>
          <Button text="Create Package" classes="bg-primary-blue text-white" />
        </div>
        <div>
          <img src={PackageImg} alt="Package" />
        </div>
      </div>
    </div>
  );
}

export default PackageBanner;
