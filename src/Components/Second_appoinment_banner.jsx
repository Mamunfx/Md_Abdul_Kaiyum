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
                        <button className="btn btn-primary btn-lg hover:scale-110 transition-transform duration-300 hover:bg-red-500 hover:border-none">
                            Book Appointment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
