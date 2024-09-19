"use client"

import { useState } from 'react';
import Link from 'next/link';

const ClassList = () => {
  const [classes, setClasses] = useState();

  const addClass = (newClass) => {
    setClasses([...classes, newClass]);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 h-screen mt-10">
      <div className="flex flex-col justify-center items-center mb-4">
        <h1 className="text-2xl font-bold">کلاس‌ها</h1>
        <Link href="/dashboard/add_class">
          <div className="bg-[#729C33] text-white px-4 py-2 rounded hover:bg-[#4d6824] transition-colors mt-14">
            افزودن کلاس+
          </div>
        </Link>
      </div>

      {classes.length === 0 ? (
        <p className='flex justify-center'>هیچ کلاسی موجود نیست.</p>
      ) : (
        <ul>
          {classes.map((classItem, index) => (
            <li key={index} className="p-4 border rounded mb-4">
              <p><strong>پایه:</strong> {classItem.grade}</p>
              <p><strong>درس:</strong> {classItem.subject}</p>
              <p><strong>محل برگزاری:</strong> {classItem.location}</p>
              <p><strong>ساعت:</strong> {classItem.time}</p>
              <p><strong>ظرفیت:</strong> {classItem.capacity}</p>
              <p><strong>هزینه:</strong> {classItem.fee} تومان</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ClassList
