import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";

function MySwiperComponent({ image }) {
  const [manyView, setManyView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 590) {
        setManyView(1);
      } else if (window.innerWidth <= 1200) {
        setManyView(2);
      } else {
        setManyView(3);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Swiper
        slidesPerView={manyView}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {image.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className="px-[.9rem] mx-auto  py-[.9rem] bg-gradient"
            >
              <Image src={item} alt="sipilku" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default MySwiperComponent;
