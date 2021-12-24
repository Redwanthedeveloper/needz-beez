import React from 'react';
import SingleFaq from './SingleFaq';

const Faq = () => {
  return (
    <>
      <div className='mt-24 pt-12' id='faq'>
        <div className='container mx-auto '>
          <h2 className='text-center text-white text-4xl uppercase font-bold'>
            Frequently Ask question
          </h2>
          <div className='px-4 pt-4 sm:pt-8'>
            <div
              className='text-left border-b-[1px] border-bsecondary border-opacity-30'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                <SingleFaq
                  title='Why bees?'
                  content='Pollinating Bees are some of the hardest working & most important creatures on the planet. Bees and other pollinators are responsible for every third mouthful we eat. For years, we have decimated the way of Life for one of the world’s oldest food producers to a point of extinction. Now it is time to make a change! With the help of an active Bee Community, we can start the Bee Revolution!!'
                />
              </div>
            </div>

            <div
              className='text-left border-b-[1px] border-bsecondary border-opacity-30'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                <SingleFaq
                  title='What inspired Needz Beez Hive?'
                  content='This project has been created by a team of NFT & Nature enthusiasts. We believe in NFTs as an expressional way to provide charitable contribution through utility benefits for the holders. Furthermore, as an instrument to develop support networks for charitable contribution and conservation efforts.'
                />
              </div>
            </div>

            <div
              className='text-left border-b-[1px] border-bsecondary border-opacity-30'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                <SingleFaq
                  title='What are Needz Beez NFTs?'
                  content='Needz Beez NFTs are a collection of 8,000 digital art pieces of bees minted on the Solana blockchain. Owning a Needz Beez NFT will give you access to very exclusive events and features : charity donations, hive sponsoring, P2E Blockchain game, percentage of royalties, community DAO, free access to a respected artist collection, NFT staking, Exclusive Needz Beez Merchandise and Giveaways.'
                />
              </div>
            </div>

            <div
              className='text-left border-b-[1px] border-bsecondary border-opacity-30'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                <SingleFaq
                  title='How many Traits and Attributes ?'
                  content={`'Our unique collection has 8 total properties and 100+ traits based around 4 of the world's most famous bees (BumbleBee, Honey Bee, Leaf Cutter Bee, AND Killer Bee) . Which hive will you join?'`}
                />
              </div>
            </div>

            <div
              className='text-left border-b-[1px] border-bsecondary border-opacity-30'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                <SingleFaq
                  title='When will I be able to own my own Needz Beez NFT?'
                  content='The bees will be released from The Hive in February, no specific date yet.'
                />
              </div>
            </div>

            <div
              className='text-left border-b-[1px] border-bsecondary border-opacity-30'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                <SingleFaq
                  title='Where can I get my Needz Beez NFT?'
                  content='You can get your hands on a Needz Beez NFT on the Solana Marketplace.'
                />
              </div>
            </div>

            <div
              className='text-left border-b-[1px] border-bsecondary border-opacity-30'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                <SingleFaq
                  title='What is the cost of a mint?'
                  content='0.5 Sol Pre sale, 1 sol Public Sale'
                />
              </div>
            </div>

            <div
              className='text-left border-b-[1px] border-bsecondary border-opacity-30'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                <SingleFaq
                  title='Are Needz Beez supporting charities?'
                  content='Yes! The Needz Beez Foundation will allocate up to 20% of sales & royalties. managed through a DAO, to help worldwide bees. Join the Discord server to make an impact and learn more.'
                />
              </div>
            </div>

            <div
              className='text-left border-b-[1px] border-bsecondary border-opacity-30'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                <SingleFaq
                  title='How can I get in touch?'
                  content='Follow us on Discord, Twitter, and Instagram. The best place for regular updates and announcements is the Needz Beez Discord!'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
