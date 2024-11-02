import React from 'react'
import heroBG from "../../assets/hero.svg"

const Hero = () => {
  return (
    <main>
        <section className='py-10'>
            <div className="container-render">
                <div className='grid grid-cols-[repeat(2,1fr)] items-center gap-[30px]'>
                    <div className='flex flex-col gap-10'>
                        <h1 className='text-5xl'>Making time a good time by making food the good food.</h1>
                        <p className='font-bold '>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized </p>
                        <div className='flex items-center gap-7 '>
                            <button className='transition duration-1.25s font-bold py-[16px] px-[40px] border border-solid border-[#dc780b] bg-[#dc780b] rounded-lg text-white hover:bg-white hover:text-[#dc780b]'>Order Now</button>
                            <button className='transition duration-1.25s font-bold py-[16px] px-[40px] border border-solid border-[#dc780b] bg-[#dc780b] rounded-lg text-white hover:bg-white hover:text-[#dc780b]'>Food Details</button>
                        </div>
                    </div>
                    <div>
                        <img className='w-full object-contain' src={heroBG} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Hero