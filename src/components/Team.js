import React from 'react';
import teamImage1 from '../assets/images/team/1.png';
import teamImage2 from '../assets/images/team/2.png';
import teamImage3 from '../assets/images/team/3.png';
import teamImage4 from '../assets/images/team/4.png';

const Team = () => {
  return (
    <>
      <div className='team my-24 pt-12' id='team'>
        <div className='container mx-auto px-4 lg:px-0'>
          <h1 className='text-center text-4xl font-bold text-white'>
            Our Team
          </h1>
          <div className='card__wrapper grid md:grid-cols-2 lg:grid-cols-4 mt-24 gap-16'>
            <div className='card bg-secondary px-8 py-16 rounded-xl  '>
              <img
                src={teamImage1}
                alt=''
                className='rounded-full w-40 mx-auto'
              />
              <p className='py-8 font-bold text-center text-white text-lg'>
                Honey bee Queen
              </p>
              {/* <p className='text-center text-sm text-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda in recusandae earum ea voluptatibus fuga quibusdam
              </p> */}
            </div>

            <div className='card bg-secondary px-8 py-16 rounded-xl  '>
              <img
                src={teamImage2}
                alt=''
                className='rounded-full w-40 mx-auto'
              />
              <p className='py-8 font-bold text-center text-white text-lg'>
                Bumble bee Queen
              </p>
              {/* <p className='text-center text-sm text-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda in recusandae earum ea voluptatibus fuga quibusdam
              </p> */}
            </div>

            <div className='card bg-secondary px-8 py-16 rounded-xl  '>
              <img
                src={teamImage3}
                alt=''
                className='rounded-full w-40 mx-auto'
              />
              <p className='py-8 font-bold text-center text-white text-lg'>
                Killer Bee Queen
              </p>
              {/* <p className='text-center text-sm text-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda in recusandae earum ea voluptatibus fuga quibusdam
              </p> */}
            </div>

            <div className='card bg-secondary px-8 py-16 rounded-xl  '>
              <img
                src={teamImage4}
                alt=''
                className='rounded-full w-40 mx-auto'
              />
              <p className='py-8 font-bold text-center text-white text-lg'>
                leaf Cutter Queen
              </p>
              {/* <p className='text-center text-sm text-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda in recusandae earum ea voluptatibus fuga quibusdam
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
