import React from 'react';
import rarityImage1 from '../assets/images/12.png';
import rarityImage2 from '../assets/images/13.png';
import rarityImage3 from '../assets/images/14.png';

const Ratity = () => {
  return (
    <>
      <div className='rarity mt-24 pt-12' id='about'>
        <div className='container mx-auto px-4 lg:px-0'>
          <div className='grid lg:grid-cols-2 gap-6 lg:gap-40 items-center'>
            <div className='rarity__left'>
              <h3 className=' text-4xl font-bold text-white'>About Us</h3>
              <p className='py-12 text-primary text-lg'>
                Since time immemorial, bees and man have lived in harmony. As
                recently as 10,000 years ago they have lived and maintained a
                sort of reciprocal lifestyle with one helping the other…. Until
                recently. Man has since become greedy in their industrial
                exploits and in turn have threatened the foundation of bee life.
                In an attempt to save their species, the Hive has birthed four
                rebellious queens who have brought with them 2,000 of their most
                loyal companions to the solana blockchain in an effort to save
                not only themselves but the planet and the metaverse.
                Unfortunately, they can’t do it by themselves; they need YOU to
                help them on their journey because “The Planet and the Metaverse
                NEEDZ BEEZ”.
              </p>
              {/* <div className='bg-gradient-to-r from-gradientright to-gradientleft text-center py-4 px-8 max-w-[12rem] rounded-lg font-medium text-white'>
                <a href='http://' target='_blank' rel='noopener noreferrer'>
                  Learn more
                </a>
              </div> */}
            </div>
            <div className='rarity__right'>
              <div className='flex gap-8 items-center'>
                <div className=''>
                  <img src={rarityImage1} alt='' className='rounded-lg' />
                </div>
                <div className='flex flex-col gap-8'>
                  <img src={rarityImage2} alt='' className='rounded-lg' />
                  <img src={rarityImage3} alt='' className='rounded-lg w-40' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ratity;
