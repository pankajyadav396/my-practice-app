"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/pagination';
import { Arrow, Svg2, Svg3 } from './Icon';
export default () => {
  const Swipemap = [
    {
      title1: 'CATEGORY',
      title: 'shooting stars',
      para: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
      para2: '1.2k',
      para3: '5',
      img: "/images/team-img-4.png"
    },
    {
      title1: 'CATEGORY',
      title: 'shooting stars',
      para: 'Photo booth fam kinfolksriracha opuiwieje leggings jianbing microdosing tousled waistcoat.',
      para2: '1.3k',
      para3: '6',
      img: "/images/team-img-2.png",
    },
    {
      title1: 'CATEGORY',
      title: 'shooting stars',
      para: 'Photo booth fam kinfolk cold-pressed sriracha leggings microdosing tousled waistcoat.',
      para2: '1.4k',
      para3: '7',
      img: "/images/team-img-3.png"
    },
    {
      title1: 'CATEGORY',
      title: 'shooting stars',
      para: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing waistcoat.',
      para2: '1.5k',
      para3: '8',
      img: "/images/team-img-4.png",
    },
    {
      title1: 'CATEGORY',
      title: 'shooting stars',
      para: 'Photo booth fam kinfolksriracha leggings jianbing jhbdcijdjw microdosing tousled waistcoat.',
      para2: '1.3k',
      para3: '6',
      img: "/images/team-img-2.png",
    },
    {
      title1: 'CATEGORY',
      title: 'shooting stars',
      para: 'Photo booth fam kinfolk cold-pressed sriracha leggings microdosing tousled waistcoat.',
      para2: '1.4k',
      para3: '7',
      img: "/images/team-img-3.png"
    },
  ]
  return (
    <div className=' !min-h-[100vh] flex flex-col'>
      <div className='container h-full min-[1600px]:max-w-[1320px] mx-auto px-3 flex !flex-grow flex-col justify-center items-center'>
        <div className='w-full'>
          <Swiper className='!pb-[50px]'
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{ clickable: true }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            loop={true}
            breakpoints={{
              576: {
                slidesPerView: 1,
              },
              660: {
                slidesPerView: 2,
              },
              876: {
                slidesPerView: 2,
              },
              1080: {
                slidesPerView: 3,
              },
            }}
          >
            {Swipemap.map((obj, index) => {
              return (
                <SwiperSlide>
                  <div class="min-h-[470px] h-full max-md:max-w-[500px]">
                    <div class="h-full border-2 border-blue-500 border-opacity-60 rounded-2xl">
                      <img src={obj.img} alt="image" className='w-full max-h-[220px] rounded-2xl' />
                      <div class="p-6">
                        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{obj.title1}</h2>
                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{obj.title}</h1>
                        <p class="leading-relaxed mb-3">{obj.para}</p>
                        <div class="flex items-center flex-wrap ">
                          <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">{obj.para2}
                            <span>{Arrow}</span>
                          </a>
                          <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            {Svg2}{obj.para2}
                          </span>
                          <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                            {Svg3}{obj.para3}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
        <div className=' text-start w-full !mt-[100px]'>
          <a href="/about" className=' text-blue-500 text-2xl'> about</a>
          <a href="/contact">contact</a>
        </div>
      </div >
    </div>
  );
};