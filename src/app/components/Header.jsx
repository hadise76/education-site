"use client"
import React from "react";
import Image from "next/image";
import Link from 'next/link'

const Header = () => {

  

  return (
    <div className="pt-8">
      <header className="flex items-center justify-between p-4 bg-white text-white h-16">
        {/* لوگو */}
        <div className="flex-shrink-0">
          {/* <img src={Logo} alt="Logo" className="h-8 w-8 sm:h-10 sm:w-10" /> */}

          <Image
            className="h-8 w-8 sm:h-10 sm:w-10"
            src="/Screenshot from 2024-08-19 12-33-01.png"
            width={600}
            height={500}
            alt="Picture of the author"
            
          />
        </div>

        {/* دکمه ورود */}
        {/* <div>
          <Link href="/auth">
          <button 
          
          className="bg-[#729C33] hover:bg-white hover:text-[#729C33] hover:border-[#729C33] hover:border-[1px] text-white font-bold py-2 px-4 rounded">
            ورود
          </button>
          </Link>
        </div> */}
        {/* دکمه‌ها */}
      <div className="flex space-x-5">
        
        <Link href="/auth">
          <button className="bg-[#729C33] text-white hover:bg-white hover:text-[#729C33] hover:border-[1px] hover:border-[#729C33] px-8 py-2 rounded  transition-colors">
            ورود 
          </button>
        </Link>
      </div>
      </header>
    </div>
  );
};

export default Header;
