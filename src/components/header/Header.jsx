import React from 'react';
import headerIMG from "../../assets/headerLogo.svg";
import { renderHeader } from '../../static';

const Header = () => {

  let renderLink = renderHeader.map((item) => {
    return ( 
      <li className='text-[18px] transition duration-1.25s hover:text-[#dc780b]' key={item.id}>
        <span>
          <a href={item.link}>{item.title}</a>
        </span>
      </li>
    )
  })

  return (
    <header className='sticky top-0 left-0 bg-white z-10'>
      <nav className="h-[70px] flex items-center">
        <div className="container-render">
          <div className="w-full flex items-center">
            <div className="link__wrapper flex items-center justify-between w-full">
              <div className="flex">
                <img className="mr-20 object-contain" src={headerIMG} alt="" />
                <ul className="flex items-center gap-8">
                  {renderLink}
                </ul>
              </div>
            </div>
            <button className="whitespace-nowrap font-bold bg-[#DC780B] pt-3 pb-3 pr-8 pl-8 rounded text-white border border-solid border-[#dc780B] transition duration-1.25s hover:bg-white hover:text-[#dc780b]">
              Booking Now
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;
