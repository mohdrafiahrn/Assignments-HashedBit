import React from 'react'

import "swiper/css"
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6'
import "swiper/css/navigation"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay,  Navigation } from 'swiper/modules'

const Slider = () => {
    return (
        <div className="w-screen h-[60vh] flex justify-center items-center mt-[30px]">
            <Swiper
                className="h-[70vh] w-screen relative"
                slidesPerView={3}
                spaceBetween={10}
                centeredSlides
                loop
                // style={{paddingBottom: "20px", paddingTop: "20px" }}
                
                modules={[Autoplay, Navigation]}
                navigation={{
                    prevEl:".swiper-button-prev",
                    nextEl:".swiper-button-next"
                }}
                autoplay

            >
                
                {[
                    "/7.png",
                    "/8.png",
                    "/9.png",
                    "/10.png",
                    "/11.png",
                    "/12.png",
                    "/9.png",
                    
                ].map((res, index) => {
                    return (
                        <SwiperSlide
                            key={index}
                            className=''
                        >
                            <img src={res} alt="" className='h-[60vh] rounded-2xl shadow-lg shadow-black'/>
                        </SwiperSlide>
                    )
                })}
                <div className='absolute bottom-14 right-20'>
                    <div className='swiper-button-prev swiper_buttons'><FaAngleLeft/></div>
                    <div className='swiper-button-next swiper_buttons'><FaAngleRight/></div>

                </div>
            </Swiper>
        </div>
    )
}

export default Slider