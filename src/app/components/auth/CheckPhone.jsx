"use client";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const CheckPhone = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState();
  const formSubmit = useRef();

  const router = useRouter();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // useEffect(() => {
  //   const token = Cookies.get("token");
  //   console.log("CLIENT TOKEN",token);
  // }, [token]);

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/accounts/login/", {
        phone_number: data.phoneNumber,
        password: data.password,
      }); //API

      // if (res.data.token) {
      //   Cookies.set("token", res.data.token); // ذخیره توکن در کوکی
      // }

      console.log("Response from API:", res.data);
      setPhoneNumber(data.phoneNumber);
    } catch (error) {
      console.log(
        "Error",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <>
      {/* {!!token ? (
        router.push("/")
      ) : ( */}
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

            <form onSubmit={handleSubmit(onSubmit)} ref={formSubmit}>
              <div className="mb-4">
                <label
                  className="text-right block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="phone"
                >
                  شماره موبایل
                </label>

                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right placeholder:text-right"
                  placeholder="شماره تماس خود را اینجا وارد کنید"
                  {...register("phoneNumber", {
                    required: {
                      value: phoneNumber,
                      message: "وارد کردن این فیلد الزامی است",
                    },
                    pattern: {
                      value:
                        /^09([0-9][0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/,
                      message: "شماره تماس شما معتبر نیست",
                    },
                  })}
                />
              </div>
              <label
                className="text-right block text-gray-700 text-sm font-bold mb-2"
                htmlFor=""
              >
                رمز عبور
              </label>
              <input
                id="password"
                name="password"
                value={password}
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right placeholder:text-right"
                placeholder="رمز عبور خود را اینجا وارد کنید"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  formSubmit.current.requestSubmit();
                }}
                className="bg-[#729C33] hover:bg-[#4d6824] text-white font-bold py-2 px-4 rounded w-full mt-5"
              >
                {" "}
                ورود{" "}
              </button>
              <p className="flex flex-row-reverse space-x-3">
                <Link href={"/auth/register"} className="text-[#729C33]">ثبت نام</Link>
                نکرده اید؟
              </p>
            </form>
          </div>
        </div>
      {/* )} */}
    </>
  );
};

export default CheckPhone;
