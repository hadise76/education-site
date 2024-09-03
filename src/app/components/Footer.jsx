import React from 'react'
import Image from "next/image";
import { FaTelegram } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="bg-[#53791b] text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">

        {/* لوگو */}
        <div className="mb-4 md:mb-0 md:order-2 flex-shrink-0">
          {/* <img
            src="/logo.png"
            alt="Logo"
            className="h-10 w-10 md:h-12 md:w-12 mx-auto md:mx-0"
          /> */}
          <Image
            className="h-10 w-10 md:h-full md:w-full mx-auto md:mx-0"
            src="/Screenshot from 2024-08-19 12-33-01.png"
            width={600}
            height={500}
            alt="Picture of the author"
            
          />
        </div>

        {/* اطلاعات تماس و شبکه‌های اجتماعی */}
        <div className="text-center md:text-right md:order-1 px-8">
          <p className="mb-2">ایمیل: hadisekeykha@gmail.com</p>
          <p className="mb-2">تلفن: 123-456-7890</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
              {/* <img src="/telegram-icon.png" alt="Telegram" className="h-6 w-6" /> */}
              <FaTelegram className="h-6 w-6 ml-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              {/* <img src="/instagram-icon.png" alt="Instagram" className="h-6 w-6" /> */}
              <RiInstagramFill className="h-6 w-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              {/* <img src="/twitter-icon.png" alt="Twitter" className="h-6 w-6" /> */}
              <TiSocialTwitter className="h-6 w-6" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
