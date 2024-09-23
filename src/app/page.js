"use client"
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function Home() {
  const token = Cookies.get("token");


  return (
    <>
    
    
      <main className="p-4">
        {/* تصویر کلاس درس */}
        <section className="bg-gray-200">
          {/* <img
          src="/classroom.jpg" 
          alt="Classroom"
          className="w-full h-64 object-cover sm:h-80 lg:h-96"
        /> */}
          <Image
            className="w-full h-80 object-cover sm:h-80 lg:h-96 mb-8"
            src="/AS-120026222.jpg"
            width={600}
            height={500}
            alt="Picture of the author"
          />
        </section>

        {/* بخش متن درباره مزایای کلاس‌های فوق برنامه */}
        <section className="p-6 bg-white">
          <h2 className="text-2xl font-bold mb-4">
            مزایای کلاس‌های فوق برنامه
          </h2>
          <p className="mb-4">
            کلاس‌های فوق برنامه به دانش‌آموزان کمک می‌کند تا مهارت‌های جدید یاد
            بگیرند و توانایی‌های خود را بهبود بخشند. این کلاس‌ها فرصتی برای
            ارتقای توانایی‌های تحصیلی و اجتماعی دانش‌آموزان فراهم می‌کنند.
            همچنین، با شرکت در این کلاس‌ها، دانش‌آموزان می‌توانند اعتماد به نفس
            بیشتری پیدا کرده و به موفقیت‌های بیشتری در زندگی دست یابند.
          </p>
          <p>
            شرکت در کلاس‌های فوق برنامه، علاوه بر آموزش مهارت‌های جدید، به
            دانش‌آموزان این امکان را می‌دهد که در محیطی سرگرم‌کننده و آموزنده به
            یادگیری بپردازند. این کلاس‌ها فرصت مناسبی برای افزایش همکاری و تعامل
            با دیگران فراهم می‌کند و می‌تواند به بهبود وضعیت تحصیلی و اجتماعی
            آن‌ها کمک کند.
          </p>
        </section>
      </main>
    </>
  );
}
