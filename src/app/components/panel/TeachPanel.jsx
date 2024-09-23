"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/navigation";
const TeachPanel = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [grade, setGrade] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  const token = Cookies.get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://127.0.0.1:8000/accounts/profile/",
        {
          first_name: firstName,
          last_name: lastName,
          province: province,
          city: city,
          address: address,
        },
        {
          headers: {
            Authorization: `Token ${token}`, // ارسال توکن برای احراز هویت
          },
        }
      );

      if (response.status === 200) {
        setMessage("اطلاعات با موفقیت ثبت شد!");
        console.log("اطلاعات با موفقیت ثبت شد!");
        router.push("/dashboard/add_class");
      }
    } catch (error) {
      console.log(
        "Error:",
        error.response ? error.response.data : error.message
      );
      setMessage("خطایی رخ داده است. لطفاً دوباره تلاش کنید.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center my-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          پروفایل معلم
        </h2>

        {message && (
          <p
            className={`text-center mb-4 ${
              message.includes("خطا") ? "text-red-500" : "text-[#e76a35]"
            }`}
          >
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-right text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              نام
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
              placeholder="نام خود را وارد کنید"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-right text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              نام خانوادگی
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
              placeholder="نام خانوادگی خود را وارد کنید"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-right text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              استان
            </label>
            <input
              type="text"
              id="province"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
              placeholder="استان خود را وارد کنید"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-right text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              شهر
            </label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
              placeholder="شهر خود را وارد کنید"
              required
            />
          </div>


          <div className="mb-6">
            <label
              className="block text-right text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              آدرس
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
              placeholder="آدرس خود را وارد کنید"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-[#e76a35] text-white hover:bg-white hover:text-[#e76a35]  hover:border border-2 border-[#e76a35]  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition-colors"
            >
              ثبت اطلاعات
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeachPanel;
