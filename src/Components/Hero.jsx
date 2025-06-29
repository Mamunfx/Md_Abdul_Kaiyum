import BackToTopButton from "../Components/BackToTopButton"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

export const Hero = () => {
  return (
    <div>
      <div>
        <img src="https://mdabdulkaiyum.in/assets/files/images/top_banner/RWUGaCKvY8qfMTboQempeTB8kcrEAZ.jpg" alt="top_img_hero" className="h-14 lg:h-32 w-full"/>
      </div>
       <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, 
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://mdabdulkaiyum.in/assets/files/images/carousel/gGS3XzzqNR3ySK6rx8SIF6I57vqDqO.jpg"
            alt="Hero_Image_1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://mdabdulkaiyum.in/assets/files/images/carousel/i8KLa25sRZCvTwGsttKX1vyFH3CHhu.jpg"
            alt="Hero_Image_2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://mdabdulkaiyum.in/assets/files/images/carousel/LjHOfj8Jnfs6y9BcCrvgulQk2fsEi9.jpg"
            alt="Hero_Image_3"
          />
        </SwiperSlide>
      </Swiper>
      <BackToTopButton></BackToTopButton>
    </div>
  );
};
