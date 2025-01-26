function Counter() {
  return (
    <div className="container md:mt-[-70px] relative z-50">
      <div className="bg-white flex flex-wrap gap-5 flex-row justify-center sm:justify-between items-center min-h-[250px] px-10 md:px-20 py-10 text-center md:shadow-lg rounded-b-3xl rounded-bl-3xl md:rounded-3xl">
        <div className="flex flex-col gap-3">
          <h3 className="text-[28px] sm:text-[44px] md:text-[60px] text-dark-slate font-semibold">
            60+
          </h3>
          <p className="text-[#516986] text-[14px] lg:text-[20px] ">
            Packages available
          </p>
        </div>
        <div className="hidden md:block w-[2px] h-[170px] bg-[#D9D9D9]"></div>
        <div className="flex flex-col gap-3">
          <h3 className="text-[28px] sm:text-[44px] md:text-[60px] text-dark-slate font-semibold">
            50+
          </h3>
          <p className="text-[#516986] text-[14px] lg:text-[20px] ">
            Students Joined
          </p>
        </div>
        <div className="hidden md:block w-[2px] h-[170px] bg-[#D9D9D9]"></div>
        <div className="flex flex-col gap-3">
          <h3 className="text-[28px] sm:text-[44px] md:text-[60px] text-dark-slate font-semibold">
            50+
          </h3>
          <p className="text-[#516986] text-[14px] lg:text-[20px] ">
            Expert Facilitators
          </p>
        </div>
      </div>
    </div>
  );
}

export default Counter;
