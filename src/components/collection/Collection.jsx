import React from 'react'
import colIMG1 from "../../assets/collection1.svg"
import colIMG2 from "../../assets/collection2.svg"
import colIMG3 from "../../assets/collection3.svg"

const Collection = () => {
  return (
    <section>
        <div className="container-render">
            <p className='text-center text-[#dc780b]'>FEATURES</p>
            <p className='text-center pb-12 text-2xl'>Food With A New Passion</p>
            <div className='grid grid-cols-3 gap-[90px]'>
                <div className='flex flex-col items-center gap-5'>
                    <img className='object-contain ' src={colIMG1} alt="" />
                    <p className='font-bold text-xl'>Quality Food </p>
                    <p className='text-center'>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                </div>
                <div className='flex flex-col items-center gap-5'>
                    <img className='object-contain ' src={colIMG2} alt="" />
                    <p className='font-bold text-xl'>Food Delivery</p>
                    <p className='text-center'>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                </div>
                <div className='flex flex-col items-center gap-5'>
                    <img className='object-contain ' src={colIMG3} alt="" />
                    <p className='font-bold text-xl'>Super Taste</p>
                    <p className='text-center'>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Collection