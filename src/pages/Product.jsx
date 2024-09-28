

const Product = () => {
    return (
        <div className="font-work">
            <h1 className="text-[40px] font-bold mt-[44px] mb-[24px] text-center">Meet our Babies</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-[50px]">
                <div className="bg-[#fff] rounded-xl shadow-lg max-w-xs w-full mx-auto my-3 overflow-hidden" data-aos="fade-right" data-aos-duration="2000">
                    <img className="w-full h-[210px] border-b border-gray-300 object-cover" src="https://i.ibb.co.com/ftmWtRZ/img1.jpg" alt="Image1"/>
                    <div className="px-5 pb-4 text-justify">
                        <h1 className="pt-[10px] pb-[11px] text-base md:text-xl lg:text-2xl font-bold font-work">Ayaan</h1>
                        <p className="text-[1rem] font-normal">Ayaan is a name often chosen for its deep spiritual significance. 
                            It reflects a sense of gratitude and blessing, making it a beautiful 
                            choice for parents who see their child as a precious gift. The name is 
                            also increasingly popular in different cultures, as it’s easy to pronounce 
                            and has a modern yet timeless appeal.</p>
                    </div>
                </div>
                <div className="bg-[#fff] rounded-xl shadow-lg max-w-xs w-full mx-auto my-3 overflow-hidden" data-aos="zoom-in-left" data-aos-duration="2000">
                    <img className="w-full h-[210px] border-b border-gray-300 object-cover" src="https://i.ibb.co.com/2ZVSv50/img2.jpg" alt=""/>
                    <div className="px-5 pb-4 text-justify">
                        <h1 className="pt-[10px] pb-[11px] text-base md:text-xl lg:text-2xl font-bold font-work">Zayn</h1>
                        <p className="text-[1rem] font-normal">Zayn is a sleek, modern name that has been made popular by public figures like singer Zayn Malik. It’s a name that conveys elegance, calmness, and inner beauty. The simplicity and global recognition of this name make it a top choice for parents looking for something short but impactful.
                        </p>
                    </div>
                </div>
                <div className="bg-[#fff] rounded-xl shadow-lg max-w-xs w-full mx-auto my-3 overflow-hidden" data-aos="zoom-in-left" data-aos-duration="2000">
                    <img className="w-full h-[210px] border-b border-gray-300 object-cover" src="https://i.ibb.co.com/5M2PFXH/img3.jpg" alt=""/>
                    <div className="px-5 pb-4 text-justify">
                        <h1 className="pt-[10px] pb-[11px] text-base md:text-xl lg:text-2xl font-bold font-work">Aryan</h1>
                        <p className="text-[1rem] font-normal">Aryan is an ancient name with strong, heroic roots. In Sanskrit, it means "noble", while in Persian, it’s associated with warriors. It carries connotations of leadership, bravery, and integrity, making it a name that stands out for parents looking for a traditional yet meaningful option for their son.</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg max-w-xs w-full mx-auto my-3 overflow-hidden" data-aos="fade-left" data-aos-duration="2000">
                    <img className="w-full h-[210px] border-b border-gray-300 object-cover" src="https://i.ibb.co/TkVV1f8/img4.jpg" alt="Ethan"/>
                    <div className="px-5 pb-4 text-justify">
                        <h1 className="pt-[10px] pb-[11px] text-base md:text-xl lg:text-2xl font-bold font-work">Ethan</h1>
                        <p className="text-[1rem] font-normal">Ethan is a classic name that has maintained its popularity over the years. It signifies strength, resilience, and dependability. Parents often choose this name for its sturdy sound and the positive, grounded qualities it reflects. Ethan has been a top choice for years, balancing tradition with modern appeal.</p>

                    </div>
                </div>
            </div>    
        </div>
    );
};

export default Product;