// "use client";
// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import Cookies from "js-cookie";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// const CheckPhone = () => {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   // const [isClient, setIsClient] = useState(false);
//   const router = useRouter();
//   const token = Cookies.get("token");

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post("http://127.0.0.1:8000/accounts/login/", {
  //       phone_number: phoneNumber,
  //       password: password,
  //     });

  //     if (response.status === 200 && isClient) {
  //       Cookies.set("token", response.data.token, { expires: 7 });
  //       console.log("Token stored in cookie:", response.data.token);
  //       router.push("/");
  //     }
  //   } catch (error) {
  //     setErrorMessage(
  //       error.response?.data?.detail || "خطایی رخ داده است. دوباره تلاش کنید."
  //     );
  //   }
  // };

  // useEffect(() => {
  //   async (e) => {
  //     e.preventDefault();
  //     try {
  //       const response = await axios.post(
  //         "http://127.0.0.1:8000/accounts/login/",
  //         {
  //           phone_number: phoneNumber,
  //           password: password,
  //         }
  //       );

  //       if (response.status === 200) {
  //         Cookies.set("token", response.data.token, { expires: 7 });
  //         console.log("token stored in cookie", response.data.token);
  //         router.push("/");
  //       }
  //     } catch (error) {
  //       setErrorMessage(
  //         error.response?.data?.detail || "خطایی رخ داده است. دوباره تلاش کنید."
  //       );
  //     }
  //   };
  // }, [password, phoneNumber, router]);

 

//   return (
//     <>
//       {!!token ? (
//         router.push("/")
//       ) : (
//         <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
//           <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
//             <h1 className="text-xl font-bold mb-6 text-center">ورود</h1>

//             {errorMessage && (
//               <p className="text-red-500 text-center mb-4">{errorMessage}</p>
//             )}

//             <form>
//               <div className="mb-4">
//                 <label
//                   className="block text-right text-gray-700 text-sm font-bold mb-2"
//                   htmlFor="phoneNumber"
//                 >
//                   شماره موبایل
//                 </label>
//                 <input
//                   type="tel"
//                   id="phoneNumber"
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right placeholder:text-right"
//                   placeholder="شماره موبایل خود را وارد کنید"
//                   required
//                 />
//               </div>

//               <div className="mb-4">
//                 <label
//                   className="block text-right text-gray-700 text-sm font-bold mb-2"
//                   htmlFor="password"
//                 >
//                   رمز عبور
//                 </label>
//                 <input
//                   type="text"
//                   id="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right placeholder:text-right"
//                   placeholder="رمز عبور خود را وارد کنید"
//                   required
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="bg-[#729C33] hover:bg-[#4d6824] text-white font-bold py-2 px-4 rounded w-full"
//               >
//                 ورود
//               </button>
//               <div className="flex flex-row-reverse space-x-3">
//                 <Link href={"/auth/register"} className="text-[#729C33]">
//                   ثبت نام
//                 </Link>
//                 <p>نکرده اید؟</p>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default CheckPhone;

"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CheckPhone = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const token = Cookies.get("token");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/accounts/login/", {
        phone_number: phoneNumber,
        password: password,
      });

      if (response.status === 200) {
        Cookies.set("token", response.data.token, { expires: 7 });
        console.log("Token stored in cookie:", response.data.token);
        router.push("/"); 
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.detail || "خطایی رخ داده است. دوباره تلاش کنید."
      );
    }
  };

  useEffect(() => {
    if (token) {
      router.push("/"); 
    }
  }, [token, router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <>
      {!!token ? (
        router.push("/")
      ) : (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
            <h1 className="text-xl font-bold mb-6 text-center">ورود</h1>

            {errorMessage && (
              <p className="text-red-500 text-center mb-4">{errorMessage}</p>
            )}

            <form onSubmit={handleSubmit(onSubmit)}>
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
                  type="text"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right placeholder:text-right"
                  placeholder="رمز عبور خود را وارد کنید"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-[#729C33] hover:bg-[#4d6824] text-white font-bold py-2 px-4 rounded w-full"
              >
                ورود
              </button>
              <div className="flex flex-row-reverse space-x-3">
                <Link href={"/auth/register"} className="text-[#729C33]">
                  ثبت نام
                </Link>
                <p>نکرده اید؟</p>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckPhone;




