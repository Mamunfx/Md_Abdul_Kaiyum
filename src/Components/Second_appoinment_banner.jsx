export const Second_appoinment_banner = () => {
  return (
    <div className="mx-6  ">
      <div
        className="hero min-h-96 relative group overflow-hidden rounded-md"
        style={{
          backgroundImage:
            "url(https://mdabdulkaiyum.in/assets/files/images/appointment/01.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="bg-black opacity-0 absolute inset-0  group-hover:opacity-35 transition-opacity duration-300 z-10"></div>
        <div className="hero-content text-neutral-content text-center relative z-20">
          <div>
            <h1 className="mb-5 text-2xl font-bold">
              চিকিৎসার জন্য নাম লেখাতে আজ‌ই অ্যাপয়েন্টমেন্ট বুক করুন
            </h1>
            <button className=" btn btn-primary btn-lg hover:scale-110 transition-transform duration-300 hover:bg-red-500 hover:border-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                className="w-5 h-5 text-white"
                fill="currentColor"
              >
                <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
              </svg>{" "}
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
