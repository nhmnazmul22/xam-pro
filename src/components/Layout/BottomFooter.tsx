import { Link } from "react-router-dom";

function BottomFooter() {
  return (
    <div className="bg-[#1B283A] py-8">
      <div className="main-container">
        <div className="flex flex-col md:flex-row justify-between items-center text-white text-[15px]">
          <p>© 2022 Xampro</p>
          <div className="flex  justify-center sm:justify-between gap-5 flex-wrap">
            <Link to="">Terms & Condition</Link>
            <Link to="">Privacy Policy</Link>
            <Link to="">Refund Policy</Link>
            <Link to="">FAQ</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomFooter;
