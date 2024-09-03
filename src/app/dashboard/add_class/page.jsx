// ./pages/add_class.js
"use client"
import { useState } from 'react';

export default function AddClass() {

  const [classDetails, setClassDetails] = useState({
    grade: '',
    subject: '',
    location: '',
    time: '',
    capacity: '',
    fee: ''
  });

  const handleChange = (e) => {
    setClassDetails({
      ...classDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // می‌توانید کلاس جدید را ذخیره کنید یا به صفحه اصلی برگردید
    window.location.href = '/dashboard';
  };

  return (
    <div className="max-w-5xl mx-auto p-6 my-14">
      <h1 className="text-2xl font-bold mb-4">افزودن کلاس</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="grade"
            placeholder="پایه کلاسی"
            className="p-2 border rounded w-full"
            value={classDetails.grade}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="نام درس"
            className="p-2 border rounded w-full"
            value={classDetails.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="location"
            placeholder="آدرس محل برگزاری کلاس"
            className="p-2 border rounded w-full"
            value={classDetails.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            name="time"
            placeholder="ساعت برگزاری کلاس"
            className="p-2 border rounded w-full"
            value={classDetails.time}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="capacity"
            placeholder="ظرفیت کلاس"
            className="p-2 border rounded w-full"
            value={classDetails.capacity}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="fee"
            placeholder="هزینه ثبت نام کلاس"
            className="p-2 border rounded w-full"
            value={classDetails.fee}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className=" bg-[#729C33] hover:bg-[#4d6824] text-white px-4 py-2 rounded transition-colors"
        >
          افزودن کلاس
        </button>
      </form>
    </div>
  );
}
