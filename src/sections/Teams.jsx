import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

import { Pagination ,Autoplay,Navigation} from 'swiper/modules';
import 'swiper/css/pagination';

// import required modules
import { EffectCreative } from 'swiper/modules';
import TeamCard from '../components/TeamCard';

function Teams() {
  return (
   <>
        <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            origin: 'left center',
            translate: ['-5%', 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: 'right center',
            translate: ['5%', 0, -200],
            rotate: [0, -100, 0],
          },
        }}
        pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
        
        modules={[EffectCreative,Autoplay, Pagination, Navigation]}
        className="mySwiper6"
      >
        <SwiperSlide><TeamCard/></SwiperSlide>
        <SwiperSlide><TeamCard/></SwiperSlide>
        <SwiperSlide><TeamCard/></SwiperSlide>
        <SwiperSlide><TeamCard/></SwiperSlide>
        <SwiperSlide><TeamCard/></SwiperSlide>
      
      </Swiper>
   </>
  )
}

export default Teams