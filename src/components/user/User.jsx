import React from 'react'
import userIMG from "../../assets/user.svg"

const User = () => {
  return (
    <section className='my-[100px]'>
        <div className="container-render">
            <div className='grid grid-cols-2 items-center gap-24'>
                <div>
                    <img className='rounded-[35px] w-full object-contain' src={userIMG} alt="" />
                </div>
                <div className='flex flex-col gap-[20px] items-start'>
                    <p className='text-[#dc780b]'>ABOUT US</p>
                    <p className='text-[30px]'>Food Stalls with Persons but  to  Product marketing plane catlogues etc to. </p>
                    <p className='text-[#150C01] text-[14px]'>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also equipment  make your marketing plane Effective.</p>
                    <button className='py-3 px-5 bg-[#dc780b] rounded text-white border border-solid border-[#dc780B] transition duration-1.25s hover:bg-white hover:text-[#dc780b]'>Read More</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default User