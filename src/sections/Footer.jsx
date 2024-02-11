import { FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <section className=" bg-secondary pt-8">
      <div className="container-wrapper">
        <div className=" grid grid-cols-2 sm:grid-cols-4 justify-evenly items-center sm:items-start gap-8 pb-8">
          <div>
            <img src="images/foot.png" alt="" className=" h-auto sm:h-[200px] mx-auto" />
            <div className=" flex justify-center  items-center gap-4">
              <a href="/" className=" text-[#fff] hover:text-[#8ae058] text-3xl">
                <FaTelegram />
              </a>
              <a href="/" className=" text-[#fff] hover:text-[#8ae058] text-3xl">
                <FaTelegram />
              </a>

              <a href="/" className="text-[#fff] hover:text-[#8ae058] text-3xl">
                <FaTelegram />
              </a>
              <a href="/" className=" text-[#fff] hover:text-[#8ae058] text-3xl">
                <FaTelegram />
              </a>
            </div>
          </div>
          <div>
            <h1 className=" text-white text-2xl font-work font-medium ">About</h1>

            <p>How it Works</p>
            <p>How it Works</p>
            <p>How it Works</p>
            <p>How it Works</p>
            <p>How it Works</p>
          </div>

          <div>
            <h1 className="text-white text-2xl font-work font-medium ">About</h1>

            <p>How it Works</p>
            <p>How it Works</p>
            <p>How it Works</p>
            <p>How it Works</p>
            <p>How it Works</p>
          </div>

          <div>
            <div className=" flex sm:block flex-col text-center justify-center mx-auto">
              <input type="text" className=" px-4 w-[160px] sm:w-auto mb-4 sm:mb-0" />
              <button className="py-2 px-10    font-medium button-62 text-lg rounded-full border border-[#4d4c4c]">submit</button>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-t border-[#747474] py-2">
        <div className="container-wrapper ">
          <div className=" flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className=" font-work text-white text-base">contact@fantunez.io</p>
            </div>

            <div>
              <p className=" font-work text-white text-base">©2023, All right reserved.</p>
            </div>

            <div className="flex items-center gap-4">
              <p className=" font-work text-white text-base underline">Privacy Policy</p>
              <p className=" font-work text-white text-base underline">Terms </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
