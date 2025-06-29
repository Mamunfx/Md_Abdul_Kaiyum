import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Customer_fedback = () => {
  return (
    <div className="space-y-14 w-11/12 mx-auto">
        <h1 className="text-center text-2xl font-bold">সুখী হওয়ার গল্প</h1>
        <div>
        <Swiper className="mySwiper">
        <SwiperSlide className="flex flex-col space-y-10 justify-center items-center">
            <h1 className="text-center text-lg text-gray-700 font-semibold w-9/12 mx-auto">আমি এখানে আমার অতিরিক্ত ওজনের জন্য চিকিৎসা করতে এসেছিলাম। চিকিৎসা শুরু করার আগে আমার ওজন ছিল ৭৮ কেজি।। চিকিৎসা  শুরুর ১ মাস ২৩ দিন পরে আমার ওজন হয় ৬৬ কেজি। আমি এখন আগের থেকে আনেক ভালো ফিল করছি।
            </h1>
            <div className="flex flex-col gap-4 justify-center items-center">
                <img src="https://mdabdulkaiyum.in/assets/files/images/patient_review/Bf7Ew7H69KveB6nsEDDmsd1o0JTiJp.PNG" alt="cusotmer_img" className="w-20 rounded-full"/>
                <h2>গুড়িয়া খাতুন</h2>
            </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col space-y-10 justify-center items-center">
            <h1 className="text-center text-lg text-gray-700 font-semibold w-9/12 mx-auto">আমি এখানে আমার অতিরিক্ত ওজনের আমার আব্বুর সুগার , ও হার্টের পেসেন্ট । পিস ডাইবেটিস সেন্টারে চিকিৎসা এ শুরুতে সুগার ছিল ৩৮০ , মেডিসিন রেগুলার খেত , মাঝে মাঝে ইনসুলিন ও নিতো। । চিকিৎসার ২০ দিনের মাথায় সেটা এখন নেমে এসেছে ১৬০ ।। এখন সুগারের মেডিসিন ছাড়ায় আছে , কোনো সমস্যা হয়না।।
            </h1>
            <div className="flex flex-col gap-4 justify-center items-center">
                <img src="https://mdabdulkaiyum.in/assets/files/images/patient_review/7hRFa8rAtnOLCuk8j3WtEcUlYCclv0.png" alt="cusotmer_img" className="w-20 rounded-full"/>
                <h2>Tarikul Sk</h2>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}
