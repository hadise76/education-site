"use client"


import React from 'react';



const RegisterField = () => {
 

  // اطلاعات کلاس به صورت موقت (در پروژه واقعی باید از سرور دریافت شود)
  const classInfo = {
    title: 'ریاضیات',
    grade: 'دهم',
    teacher: {
      name: 'آقای محمدی',
      experience: '20 سال تجربه در تدریس ریاضیات',
    },
    remainingCapacity: 3,
    address: 'تهران، خیابان ولیعصر، نرسیده به پارک ملت، پلاک ۵',
    fee: '۲۰,۰۰۰ تومان',
  };

  const handlePayment = () => {
    // هدایت به درگاه پرداخت
    window.location.href = '/payment-gateway';
  };

  return (
    <div className="min-h-screen p-6 mt-8">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">{classInfo.title} - پایه {classInfo.grade}</h1>
        
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">معلم: {classInfo.teacher.name}</h2>
          <p className="text-gray-700">{classInfo.teacher.experience}</p>
        </div>

        <div className="mb-4">
          <p className="text-gray-700">
            ظرفیت باقی‌مانده: <span className="font-bold">{classInfo.remainingCapacity} نفر</span>
          </p>
        </div>

        <div className="mb-4">
          <p className="text-gray-700">
            آدرس محل برگزاری: <span className="font-bold">{classInfo.address}</span>
          </p>
        </div>

        <div className="mb-4">
          <p className="text-gray-700">
            هزینه ثبت‌نام: <span className="font-bold">{classInfo.fee}</span>
          </p>
        </div>

        <button
          onClick={handlePayment}
          className="bg-[#729C33] hover:bg-[#4d6824] text-white font-bold py-2 px-4 rounded w-full"
        >
          ثبت‌نام و پرداخت
        </button>
      </div>
    </div>
  );
}

export default RegisterField
