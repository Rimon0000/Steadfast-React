const Banner = () => {
    return (
      <div
        className="bg-cover bg-center bg-no-repeat min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] relative"
        style={{ backgroundImage: "url('https://i.ibb.co/GQLDDWk/banner.png')" }}
      >
        <div className="absolute font-work text-center top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
          <div className="">
            <h1 className="text-[20px] sm:text-[35px] md:text-[40px] lg:text-6xl font-bold text-[#151414] max-w-[240px] sm:max-w-[525px] md:max-w-[525px] lg:max-w-[525px]">
              All Thinks Are Possible If You Believe
            </h1>
            <p className="my-8 text-xs sm:text-xs md:text-sm lg:text-base text-[#444343] max-w-[235px] sm:max-w-[494px] md:max-w-[494px] lg:max-w-[494px] w-full">
              There are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour, or randomised words.
            </p>
            <button className=" btn-primary bg-[#F15B22] text-white sm:text-[14px] md:text-[16px] lg:text-[20px] font-semibold py-[8px] px-[16px] sm:py-[10px] sm:px-[20px] md:py-[12px]  md:px-[24px] lg:py-[16px] lg:px-[32px] rounded-md">
              Contact us
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  