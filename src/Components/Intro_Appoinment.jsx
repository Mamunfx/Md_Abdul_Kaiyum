
export const Intro_Appoinment = () => {
  return (
    <div>
      <div className="flex shadow-lg mx-8 p-10 justify-between">
        <div className="flex flex-col space-y-6">
          <h1 className="text-3xl">চিকিৎসার জন্য আজ‌ই অ্যাপয়েন্টমেন্ট বুক করুন</h1>
          <h1 className="text-lg">
            • ঔষধ মুক্ত জীবন সুস্থ জীবন, আর এর জন্য প্রয়োজন স্বাস্থ্যকর লাইফ
            স্টাইল।
          </h1>
        </div>
        <button className="btn btn-lg btn-primary"> <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                className="w-5 h-5 text-white"
                fill="currentColor"
              >
                <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
              </svg>{" "} Book Appointment</button>
      </div>
    </div>
  );
};
