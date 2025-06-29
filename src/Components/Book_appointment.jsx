import  { useState } from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

const options1 = [
  { value: "a", label: "Md. Abdul Kaiyum" },
  ,
];

const options2 = [
  { value: "1", label: "হাই প্রেসার (উচ্চ রক্তচাপ)" },
  { value: "1", label: "অতিরিক্ত ওজন (স্থুলতা)" },
  { value: "1", label: "কিডনিতে পাথর (কিডনি স্টোন)" },
  { value: "1", label: "ফ্যাটি কিডনি" },
  { value: "1", label: "হার্ট ব্লকেজ" },
  { value: "1", label: "ট্রাইগ্লিসারাইড (টিজি)" },
  { value: "1", label: "লিভারে চর্বি জমা (ফ্যাটি লিভার)" },
  { value: "1", label: "কোলেস্ট্রল (রক্তে চর্বি)" },
  { value: "1", label: "হাইপারইনসুলিনমিয়া" },
  { value: "1", label: "ফ্যাটি প্যানক্রিয়াস" },

  ,
];

export const Book_appointment = () => {
  const [select1, setSelect1] = useState("");
  const [select2, setSelect2] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="space-y-8 dark:bg-gray-900 ">
      <Navbar></Navbar>
      <div className="pt-28">
        <h1 className="text-center text-2xl font-bold ">বুক অ্যাপয়েন্টমেন্ট</h1>
      <div className="w-10/12 mx-auto ">
        <form
          onSubmit={handleSubmit}
          className="p-8 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl shadow-2xl"
        >
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-800">
                লাইফস্টাইল মডিফায়ার
              </label>
              <div className="relative">
                <select
                  value={select1}
                  onChange={(e) => setSelect1(e.target.value)}
                  className="appearance-none w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition shadow-sm"
                  required
                >
                  <option value="">Select an option</option>
                  {options1.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  ▼
                </span>
              </div>
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-800">
               আপনার সমস্যা সিলেক্ট করুন
              </label>
              <div className="relative">
                <select
                  value={select2}
                  onChange={(e) => setSelect2(e.target.value)}
                  className="appearance-none w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition shadow-sm "
                  required
                >
                  <option value="">Select an option</option>
                  {options2.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-black">
                  ▼
                </span>
              </div>
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-800">
                অ্যাপয়েন্টমেন্ট ডেট সিলেক্ট করুন
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition shadow-sm"
                required
              />
            </div>
            <div className="flex items-end justify-start">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition"
              >
              
                Request for an appointment
              </button>
            </div>
          </div>
        </form>
      </div>
      </div>
      <Footer></Footer>
    </div>
  );
};