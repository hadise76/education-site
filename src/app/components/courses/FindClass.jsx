"use client"


import { useState } from 'react';
import Link from 'next/link';

const provinces = {
  'تهران': ['تهران', 'ری', 'اسلامشهر'],
  'خراسان رضوی': ['مشهد', 'نیشابور', 'سبزوار'],
  'فارس': ['شیراز', 'مرودشت', 'فسا'],
};

const subjects = ['ریاضیات', 'فیزیک', 'شیمی', 'زیست‌شناسی'];

const generateClasses = (province, city, subject) => {
  const capacity = Math.floor(Math.random() * 2) + 5; // ظرفیت 5 یا 6 نفره
  return {
    title: subject,
    grade: 'دهم',
    teacher: 'آقای محمدی',
    city: city,
    province: province,
    capacity: capacity,
    address: 'خیابان ولیعصر',
  };
};

export default function ClassSearch() {
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [classList, setClassList] = useState([]);

  const handleSearch = () => {
    if (selectedProvince && selectedCity && selectedSubject) {
      const newClass = generateClasses(selectedProvince, selectedCity, selectedSubject);
      setClassList([newClass]);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">جستجوی کلاس</h1>
        
        <div className="mb-4 flex flex-col justify-center md:flex-row md:space-x-5 space-y-4 md:space-y-0">
          <div className="md:flex-1 ml-5">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="province">
              انتخاب استان
            </label>
            <select
              id="province"
              value={selectedProvince}
              onChange={(e) => {
                setSelectedProvince(e.target.value);
                setSelectedCity(''); // ریست کردن انتخاب شهر
                setClassList([]); // ریست کردن لیست کلاس‌ها
              }}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="" >انتخاب استان</option>
              {Object.keys(provinces).map((province) => (
                <option key={province} value={province}>
                  {province}
                </option>
              ))}
            </select>
          </div>

          <div className="md:flex-1">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
              انتخاب شهر
            </label>
            <select
              id="city"
              value={selectedCity}
              onChange={(e) => {
                setSelectedCity(e.target.value);
                setClassList([]); // ریست کردن لیست کلاس‌ها
              }}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              disabled={!selectedProvince}
            >
              <option value="">انتخاب شهر</option>
              {selectedProvince &&
                provinces[selectedProvince].map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
            </select>
          </div>

          <div className="md:flex-1">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
              انتخاب درس
            </label>
            <select
              id="subject"
              value={selectedSubject}
              onChange={(e) => {
                setSelectedSubject(e.target.value);
                setClassList([]); // ریست کردن لیست کلاس‌ها
              }}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">انتخاب درس</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={handleSearch}
          className="bg-[#729C33] hover:bg-[#4d6824] text-white font-bold py-2 px-4 rounded w-full"
        >
          جستجو
        </button>

        <div className="mt-6">
          {classList.length > 0 ? (
            classList.map((cls, index) => (
              <div key={index} className="bg-[#e0f7be] p-4 rounded mb-4 flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-bold mb-2">
                    {cls.title} - پایه {cls.grade}
                  </h2>
                  <p className="text-gray-700">معلم: {cls.teacher}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">ظرفیت: {cls.capacity} نفر</p>
                  <p className="text-gray-600">آدرس: {cls.address}</p>
                  
                </div>
                <Link href="/courses/register"> 
                  <button className="bg-[#729C33] hover:bg-[#4d6824] text-white font-bold py-2 px-6 mt-2 rounded ">
                    ثبت‌نام
                  </button>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center">کلاسی یافت نشد.</p>
          )}
        </div>
      </div>
    </div>
  );
}
