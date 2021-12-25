import React from 'react';
import Slider from 'react-slick';
import sliderImage1 from '../assets/images/slider/6.png';
import sliderImage2 from '../assets/images/slider/7.png';
import sliderImage3 from '../assets/images/slider/10.png';
import sliderImage4 from '../assets/images/slider/11.png';
import sliderImage5 from '../assets/images/slider/12.png';
import sliderImage6 from '../assets/images/slider/13.png';
import sliderImage7 from '../assets/images/slider/14.png';
import sliderImage8 from '../assets/images/slider/15.png';
import sliderImage9 from '../assets/images/slider/16.png';
import sliderImage10 from '../assets/images/slider/17.png';
import sliderImage11 from '../assets/images/slider/18.png';
import sliderImage12 from '../assets/images/slider/19.png';
import sliderImage13 from '../assets/images/slider/23.png';
import sliderImage14 from '../assets/images/slider/24.png';
import sliderImage15 from '../assets/images/slider/25.png';

const ImageSlider = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 5,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className='mt-24 pt-12'>
        <div className='container mx-auto px-4 lg:px-0'>
          <h3 className=' text-4xl font-bold text-white'>Our Items</h3>
          <p className='py-12 text-primary text-lg w-full lg:w-2/4'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            ab porro expedita voluptate praesentium dignissimos, magnam est
            saepe labore. Officia!
          </p>
          <Slider {...settings}>
            <div className='p-4 lg:p-8'>
              <img
                src={sliderImage1}
                alt=''
                className='max-w-full rounded-xl'
              />
            </div>

            <div className='p-4 lg:p-8'>
              <img
                src={sliderImage2}
                alt=''
                className='max-w-full rounded-xl'
              />
            </div>

            <div className='p-4 lg:p-8'>
              <img
                src={sliderImage3}
                alt=''
                className='max-w-full rounded-xl'
              />
            </div>
            <div className='p-4 lg:p-8'>
              <img
                src={sliderImage4}
                alt=''
                className='max-w-full rounded-xl'
              />
            </div>
            <div className='p-4 lg:p-8'>
              <img
                src={sliderImage5}
                alt=''
                className='max-w-full rounded-xl'
              />
            </div>

            <div className='p-4 lg:p-8'>
              <img
                src={sliderImage6}
                alt=''
                className='max-w-full rounded-xl'
              />
            </div>

            <div className='p-4 lg:p-8'>
              <img
                src={sliderImage7}
                alt=''
                className='max-w-full rounded-xl'
              />
            </div>

            <div className='p-4 lg:p-8'>
              <img
                src={sliderImage8}
                alt=''
                className='max-w-full rounded-xl'
              />
            </div>

            <div className='p-4 lg:p-8'>
              <img
                src={sliderImage9}
                alt=''
                className='max-w-full rounded-xl'
              />
            </div>

            <div className='p-4 lg:p-8'>
              <img
                src={sliderImage10}
                alt=''
                className='max-w-full rounded-xl'
              />
            </div>

            <div className='p-4 lg:p-8'>
              <img
                src={sliderImage11}
                alt=''
                className='max-w-full rounded-xl'
              />
            </div>

            <div className='p-4 lg:p-8'>
              <img
                src={sliderImage12}
                alt=''
                className='max-w-full rounded-xl'
              />
            </div>

            <div className='p-4 lg:p-8'>
              <img
                src={sliderImage13}
                alt=''
                className='max-w-full rounded-xl'
              />
            </div>

            <div className='p-4 lg:p-8'>
              <img
                src={sliderImage14}
                alt=''
                className='max-w-full rounded-xl'
              />
            </div>

            <div className='p-4 lg:p-8'>
              <img
                src={sliderImage15}
                alt=''
                className='max-w-full rounded-xl'
              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
