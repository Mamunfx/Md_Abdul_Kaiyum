import { Link } from "react-router-dom";

export const Intro_Appoinment = () => {
  return (
     <div>
      <div className="flex flex-col md:flex-row shadow-lg mx-2 md:mx-8 p-5 md:p-10 justify-between items-start md:items-center gap-6 md:gap-0">
        <div className="flex flex-col space-y-4 md:space-y-6 w-full md:w-auto">
          <h1 className="text-xl md:text-3xl font-semibold">
            চিকিৎসার জন্য আজ‌ই অ্যাপয়েন্টমেন্ট বুক করুন
          </h1>
          <h1 className="text-base md:text-lg">
            • ঔষধ মুক্ত জীবন সুস্থ জীবন, আর এর জন্য প্রয়োজন স্বাস্থ্যকর লাইফ
            স্টাইল।
          </h1>
        </div>
        <Link to="/book_appointment">
         <button className="btn btn-primary btn-lg w-full md:w-auto mt-4 md:mt-0 flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="w-5 h-5 text-white"
            fill="currentColor"
          >
            <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
          </svg>
          Book Appointment
        </button>
        </Link>
       
      </div>
    </div>
  );
};
