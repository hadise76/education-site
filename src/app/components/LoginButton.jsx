import React, { useState, useEffect } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlinePlayLesson } from "react-icons/md";
import { SlBookOpen } from "react-icons/sl";

const LoginButton = () => {
  const [userType, setUserType] = useState(null);
  const token = Cookies.get("token");
  const type = Cookies.get("type");

  useEffect(() => {
    // نوع کاربر را از کوکی دریافت می‌کنیم
    if (type) {
      setUserType(type); // مقدار را به عدد تبدیل می‌کنیم
    }
  }, [type, token]);

  const handleRemoveToken = () => {
    Cookies.remove("token");
    Cookies.remove("type");
  };

  return (
    <div>
      {!!token && userType === "3" ? (
        <div className="ml-4">
          {/* دکمه‌ها برای معلم */}
          <Link href="/dashboard/panel/teacher" className="relative hover:text-[#e76a35]">
          <IoPersonOutline className="absolute bottom-1  right-2" />
            <button className=" text-white  px-8 py-2 ml-4 hover:text-[#e76a35]">
              پروفایل معلم
            </button>
          </Link>
          <Link href="/dashboard" className="relative hover:text-[#e76a35]">
          <MdOutlinePlayLesson className="absolute bottom-1  right-2" />
            <button className=" text-white px-8 py-2 hover:text-[#e76a35]">
              کلاس‌های من
            </button>
          </Link>
        </div>
      ) : userType === "2" ? (
        <div className="ml-4">
          {/* دکمه‌ها برای دانش‌آموز */}
          <Link href="/dashboard/panel/student" className="relative hover:text-[#e76a35]">
            <IoPersonOutline className="absolute bottom-1  right-2" />
            <button className=" text-white  px-8 py-2 ml-4 hover:text-[#e76a35]">
              پروفایل دانش‌آموز
            </button>
          </Link>
          <Link href="/" className="relative hover:text-[#e76a35]">
          <SlBookOpen className="absolute bottom-1  right-2"  />
            <button className=" text-white px-8 py-2 hover:text-[#e76a35]">
              درس‌های من
            </button>
          </Link>
        </div>
      ) : (
        <p>کاربر غیر مجاز</p>
      )}
    </div>
  );
};

export default LoginButton;
