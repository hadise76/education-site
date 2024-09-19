"use client";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const GetPhone = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("1");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/accounts/register/", {
        phone_number: data.phoneNumber,
        password: data.password,
        type: type,
      });

      if (res.data.token) {
        Cookies.set("token", res.data.token, { expires: 7 });
        console.log("Token stored in cookie:", res.data.token);
        if(response.status === 200){
          router.push("/");
        }
        else{
          alert("شما قبلا ثبت نام کرده اید");
        }
      }
    } catch (error) {
      console.log(
        "Error",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="font-bold text-xl mb-5 text-center">ثبت نام</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-right"
              htmlFor="phone"
            >
              شماره موبایل
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
              placeholder="شماره موبایل"
              {...register("phoneNumber", {
                required: "وارد کردن شماره موبایل الزامی است",
                pattern: {
                  value: /^09([0-9]{9})$/,
                  message: "شماره موبایل معتبر نیست",
                },
              })}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs italic">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-right"
              htmlFor="password"
            >
              رمز عبور
            </label>
            <input
              type="text"
              id="password"
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
              placeholder="رمز عبور"
              {...register("password", {
                required: "وارد کردن رمز عبور الزامی است",
                minLength: {
                  value: 6,
                  message: "رمز عبور باید حداقل 6 کاراکتر باشد",
                },
              })}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-right"
              htmlFor="type"
            >
              نقش
            </label>
            <select
              id="type"
              name="type"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="1" disabled>
                نقش خود را انتخاب کنید
              </option>
              <option value="2">دانش‌آموز</option>
              <option value="3">معلم</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-[#729C33] hover:bg-[#4d6824] text-white font-bold py-2 px-4 rounded w-full"
          >
            ثبت نام
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default GetPhone;
