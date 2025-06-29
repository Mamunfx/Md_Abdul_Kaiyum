import  { useState } from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

const options1 = [
  { value: "option1", label: "Dropdown 1 - Option 1" },
  { value: "option2", label: "Dropdown 1 - Option 2" },
];

const options2 = [
  { value: "optionA", label: "Dropdown 2 - Option A" },
  { value: "optionB", label: "Dropdown 2 - Option B" },
];

export const Book_appointment = () => {
  const [select1, setSelect1] = useState("");
  const [select2, setSelect2] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="space-y-8">
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
                Dropdown 1
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
                Dropdown 2
              </label>
              <div className="relative">
                <select
                  value={select2}
                  onChange={(e) => setSelect2(e.target.value)}
                  className="appearance-none w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition shadow-sm"
                  required
                >
                  <option value="">Select an option</option>
                  {options2.map((opt) => (
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
                Date
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