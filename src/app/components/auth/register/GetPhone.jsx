"use client";
import axios from "axios";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState(""); // برای ذخیره‌سازی نقش کاربر
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/accounts/register/", {
        phone_number: phoneNumber,
        password: password,
        type: type,
      });

      if (response.status === 201) {
        Cookies.set("token", response.data.token, { expires: 7 });
        Cookies.set("type", response.data.user.type, { expires: 7 });

        // بررسی نقش و هدایت به صفحه مناسب
        if (type === "3") {
          router.push("/dashboard/panel/teacher"); // اگر معلم بود
        } else if (type === "2") {
          router.push("/dashboard/panel/student"); // اگر دانش‌آموز بود
        }
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.detail || "خطایی رخ داده است. دوباره تلاش کنید."
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h1 className="text-xl font-bold mb-6 text-center">ثبت نام</h1>

        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}

        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              className="block text-right text-gray-700 text-sm font-bold mb-2"
              htmlFor="phoneNumber"
            >
              شماره موبایل
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right placeholder:text-right"
              placeholder="شماره موبایل خود را وارد کنید"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-right text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              رمز عبور
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right placeholder:text-right"
              placeholder="رمز عبور خود را وارد کنید"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-right text-gray-700 text-sm font-bold mb-2"
              htmlFor="role"
            >
              نقش خود را انتخاب کنید
            </label>
            <select
              id="role"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
              required
            >
              <option value="" disabled>
                انتخاب نقش
              </option>
              <option value="3">معلم</option>
              <option value="2">دانش آموز</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-[#e76a35] hover:bg-white hover:text-[#e76a35] hover:border border-2 border-[#e76a35] text-white font-bold py-2 px-4 rounded w-full transition-colors mt-4"
          >
            ثبت نام
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
