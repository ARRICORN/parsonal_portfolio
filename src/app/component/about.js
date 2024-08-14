import Image from 'next/image';
import React from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { Inknut_Antiqua } from '@next/font/google';
const inknutAntiqua = Inknut_Antiqua({
    subsets: ['latin'],
    weight: ['400', '700'], // You can specify other weights if needed
    display: 'swap',         // Optional: Improves font loading behavior
});
const About = () => {
    return (
        <div >
            <div className='max-w-[1400px] m-auto px-5'>
                <div className={inknutAntiqua.className}><div className="grid  md:grid-cols-2 sm:grid-cols-1">
                    <div className='text-justify text-white'>
                        <p className='text-5xl line pt-12 pb-12'>Who I Am?</p>
                        <p className='leading-loose text-[#e8e8eb] text-[13px] font-normal'>Hello! I’m Kamrul Hasan Rifat, a passionate UI/UX designer with a keen eye for detail and a dedication to creating intuitive and engaging user experiences. With experience at Arridev Studios and on Fiverr, I’ve honed my skills in designing user interfaces that are not only visually appealing but also functionally robust.
                            <br />
                            <br />
                            Whether it’s designing a sleek mobile app, an intuitive website, or a comprehensive design system, I strive to create products that users love. I believe in the power of design to transform the way we interact with technology, and I’m excited to continue this journey, taking on new challenges and pushing the boundaries of what’s possible. <br />   <br />
                            Feel free to browse my portfolio to see some of my recent work, and don’t hesitate to get in touch if you’d like to collaborate on a project. Let’s create something amazing together!</p>
                        <p>
                        <br />
                        <br />  
                        </p>

                        <button type="button" className=" text-white bg-[#353434] focus:outline-  font-medium rounded-sm border text-sm px-5 py-3 me-2 border-gray-500  mb-12  ">
                            <span className='justify-center flex gap-2 items-center m-auto'>Learn More About Me <FaAngleRight size={20} /></span>
                        </button>
                    </div>
                    <div className='justify-center items-center m-auto pb-5'>
                        <Image
                            src="/ab.png"
                            width={300}
                            height={300}
                            alt="Picture of the author"
                        />
                    </div>
                </div></div>


            </div>

        </div>
    );
};

export default About;