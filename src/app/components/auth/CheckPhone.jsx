"use client"
import { useState } from 'react';
import Image from "next/image";

export default function Login() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp === '12345') {
      // اگر عدد درست بود به صفحه بعد هدایت شود
      window.location.href = '/courses';  // مسیر صفحه‌ی بعدی را اینجا تغییر دهید
    } 
    else if(otp === '54321'){
      window.location.href = '/dashboard' ;
    }
    
    else {
      // اگر عدد اشتباه بود پیام خطا نمایش داده شود
      setError('کد وارد شده اشتباه است. لطفاً دوباره تلاش کنید.');
      setOtp(''); // پاک کردن فیلد ورودی برای ورود دوباره
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <div className="flex justify-center mb-6">
        <Image
            className="h-8 w-8 sm:h-10 sm:w-10"
            src="/Screenshot from 2024-08-19 12-33-01.png"
            width={600}
            height={500}
            alt="Picture of the author"
            
          />
        </div>

        {step === 1 && (
          <form onSubmit={handlePhoneSubmit}>
            <div className="mb-4">
              <label className="text-right block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                شماره موبایل
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right placeholder:text-right"
                placeholder="09123456789"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-[#729C33] hover:bg-[#4d6824] text-white font-bold py-2 px-4 rounded w-full"
            >
              ورود با رمز یکبار مصرف
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleOtpSubmit}>
            <div className="mb-4">
              <label className="text-right block text-gray-700 text-sm font-bold mb-2" htmlFor="otp">
                کد تایید
              </label>
              <input
                type="text"
                id="otp"
                name="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right placeholder:text-right"
                placeholder="XXXXXX"
                required
              />
            </div>
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
            <button
              type="submit"
              className="bg-[#729C33] hover:bg-[#4d6824] text-white font-bold py-2 px-4 rounded w-full"
            >
              تایید کد
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
