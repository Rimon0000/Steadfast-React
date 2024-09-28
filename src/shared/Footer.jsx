
const Footer = () => {
    return (
        <div className="mt-12 bg-[#111111] text-[#CFCFCF] font-work">
          <footer className=" px-[37px] pt-[44px] pb-[63px]">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
              <div>
                {/* <img className="pb-2" src="" alt=""> */}
                <h1 className="pb-3 sm:text-[34px] lg:text-[39px] font-medium">SteadFast</h1>
                <p className="text-base">
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                </p>
              </div>
              
              <div>
                <h3 className="pb-3 text-[28px] font-medium">Useful Link</h3>
                <div className="text-base">
                  <p>Homes</p>
                  <p className="py-4">Service</p>
                  <p>Cases</p>
                  <p className="py-4">Blogs</p>
                  <p>Contact Us</p>
                </div>
              </div>
              
              <div>
                <h3 className="pb-3 text-[28px] font-medium">Contact Now</h3>
                <div className="text-base">
                  <p>555 4th 5t NW, Washington<br />
                    DC 20530, United States</p>
                  <p className="py-4">+88 01750 000 000<br />
                    +88 01750 000 000</p>
                  <p>info@gmail.com
                    info@gmail.com</p>
                </div>
              </div>
              
              <div>
                <h3 className="pb-1 text-[28px] font-medium">Subscribe</h3>
                <p className="text-base py-2">Subscribe for our latest & Articles. We Won’t Give You Spam Mails</p>
                <form className="flex items-center gap-2 mt-2" role="search">
                  <input
                    className="form-input text-black w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-800"
                    type="email"
                    placeholder="Email Address"
                    aria-label="Email Address"
                  />
                  <button className="btn btn-outline btn-success rounded-r-lg btn-sm py-5 place-content-center font-normal !text-[#CFCFCF] border-[#198754] text-base" type="submit">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </footer>
        </div>

    );
};

export default Footer;