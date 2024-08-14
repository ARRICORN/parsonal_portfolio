import Image from 'next/image';
import React from 'react';
import { Inknut_Antiqua } from '@next/font/google';
const inknutAntiqua = Inknut_Antiqua({
    subsets: ['latin'],
    weight: ['400', '700'], // You can specify other weights if needed
    display: 'swap',         // Optional: Improves font loading behavior
});
const Expericnce = () => {
    return (
        <>
            <div className=' pb-8'>
                <div className='max-w-[1400px] m-auto px-5'>
                    <div className={inknutAntiqua.className}><p className='text-5xl line pt-12 pb-12 text-white'>Experience</p></div>
                    
                    <div className="flex flex-col md:flex-row gap-5">
                    <div className='shadow'>
                        <Image
                            src="/ux.png"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />
                        </div>
                        <div className='shadow'>
                        <Image
                            src="/lp.png"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
                
                </div>

            </div>


        </>
    );
};

export default Expericnce;