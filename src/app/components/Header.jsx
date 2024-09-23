"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie";
import LoginButton from "../components/LoginButton";

const Header = () => {
  const token = Cookies.get("token");

  const handleRemoveToken = () => {
    Cookies.remove("token");
    Cookies.remove("type");
  };
  useEffect(() => {}, []);

  return (
    <div className="pt-8">
      <header className="flex items-center justify-between p-4 bg-[#1d2856] text-white h-16 rounded-lg">
        {/* لوگو */}
        <div className="flex-shrink-0">
          {/* <img src={Logo} alt="Logo" className="h-8 w-8 sm:h-10 sm:w-10" /> */}

          <Image
            className="h-8 w-10 sm:h-10 sm:w-12"
            src="/Education-Logo-Graphics-1-2-580x386.jpg"
            width={600}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className="flex space-x-5">
        {!!token ? (<LoginButton />) : (null)}
          {!token ? (
            <Link href="/auth">
              <button className="bg-[#e76a35] text-white hover:bg-white hover:text-[#e76a35]  hover:border border-2 border-[#e76a35] px-8 py-2 rounded transition-colors">
                ورود
              </button>
            </Link>
          ) : (
            <>
              <Link href="/auth">
                <button
                  onClick={handleRemoveToken}
                  className="bg-[#e76a35] text-white hover:bg-white hover:text-[#e76a35]  hover:border border-2 border-[#e76a35] px-8 py-2 rounded transition-colors"
                >
                  خروج
                </button>
              </Link>
            </>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
