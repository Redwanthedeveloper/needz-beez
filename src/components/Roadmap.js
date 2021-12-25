import React from 'react';

const Roadmap = () => {
  return (
    <>
      <div className='roadmap mt-24 py-12' id='roadmap'>
        <div className='container mx-auto px-4 lg:px-0'>
          <div className='roadmap__wrapper grid  lg:grid-cols-3 gap-10 lg:gap-20'>
            <div className='roadmap__brief md:col-span-2 lg:col-span-2'>
              <h3 className=' text-4xl font-bold text-white'>The Roadmap</h3>
              <p className='py-12 text-primary text-lg'>
                Queen beez are about to lay their eggz for the future of the
                Planet and Metaverse
              </p>
            </div>
            <div className='roadmap__item '>
              <div className='count '>
                <h1 className='font-bold text-3xl bg-gradient-to-r  from-gradientright to-gradientleft w-12 text-center text-white rounded-full h-12 flex items-center justify-center'>
                  1
                </h1>
              </div>
              <h3 className='text-left font-bold text-white text-2xl py-6'>
                PRE-LAUNCH (Egg stage)
              </h3>
              <p className='text-primary'>
                **Finalize art design <br />
                **Finalize website
              </p>
            </div>

            <div className='roadmap__item '>
              <div className='count '>
                <h1 className='font-bold text-3xl bg-gradient-to-r  from-gradientright to-gradientleft w-12 text-center text-white rounded-full h-12 flex items-center justify-center'>
                  2
                </h1>
              </div>
              <h3 className='text-left font-bold text-white text-2xl py-6'>
                PRE-SALE (Larva Stage) Day 6
              </h3>
              <p className='text-primary'>
                **2,500 discord (10 beez)/5,000 discord (10 beez)/10,000 discord
                (10 beez) <br />
                ** Free NFT apparel featuring your minted NFT during Phase 4{' '}
                <br />
                ** 1,000 bees to be minted for .5 sol w/ an exclusive Needz Beez
                OG Minter Black Card distributed during Phase 4
              </p>
            </div>

            <div className='roadmap__item '>
              <div className='count '>
                <h1 className='font-bold text-3xl bg-gradient-to-r  from-gradientright to-gradientleft w-12 text-center text-white rounded-full h-12 flex items-center justify-center'>
                  3
                </h1>
              </div>
              <h3 className='text-left font-bold text-white text-2xl py-6'>
                LAUNCH 1st Mint (Larva) Day 10
              </h3>
              <p className='text-primary'>
                **50% of 1st mint (5 sol giveaway for 1 holder) <br />
                ** Merch Store Launch <br />
                **100% of 1st mint- 20% ROYALTIES activated (5 sol giveaway for
                1 holders) <br />
                ** 4 HOLDERS OF QUEEN BEE WILL GET 5 SOL A MONTH FOR 3 months
              </p>
            </div>

            <div className='roadmap__item '>
              <div className='count '>
                <h1 className='font-bold text-3xl bg-gradient-to-r  from-gradientright to-gradientleft w-12 text-center text-white rounded-full h-12 flex items-center justify-center'>
                  4
                </h1>
              </div>
              <h3 className='text-left font-bold text-white text-2xl py-6'>
                PRE-LAUNCH 2 (Pupa) Day 14
              </h3>
              <p className='text-primary'>
                **REVEAL BEE FARM TRIP LOCATION <br />
                **5 sol giveaway for 2 holders <br />
                ** AFTER 40 DAYS, HOLDERS WILL QUALIFY FOR BEE FARM TRIP,
                WHITELIST FOR SECOND MINT. <br />
                ** COLLABORATION WITH OTHER NFT PROJECTS
              </p>
            </div>

            <div className='roadmap__item '>
              <div className='count '>
                <h1 className='font-bold text-3xl bg-gradient-to-r  from-gradientright to-gradientleft w-12 text-center text-white rounded-full h-12 flex items-center justify-center'>
                  5
                </h1>
              </div>
              <h3 className='text-left font-bold text-white text-2xl py-6'>
                (Mature Pupa) Day 21
              </h3>
              <p className='text-primary'>
                **SECOND MINT <br />
                **50% MINT OF SECOND MINT- Live Discord and Twitch party + Merch
                Giveaway <br />
                **20,000 discord (10 beez)/30,000 discord (10 beez)/45,000
                discord (10 beez) <br />
                **100% MINT OF SECOND MINT- FORM OF COMMUNITY DAO
              </p>
            </div>

            <div className='roadmap__item '>
              <div className='count '>
                <h1 className='font-bold text-3xl bg-gradient-to-r  from-gradientright to-gradientleft w-12 text-center text-white rounded-full h-12 flex items-center justify-center'>
                  6
                </h1>
              </div>
              <h3 className='text-left font-bold text-white text-2xl py-6'>
                (Adult) Day 21
              </h3>
              <p className='text-primary'>
                **NFT GAME BETA <br />
                **Discord process of deciding how to spend Community dao <br />
                ** OG Minters only exclusive Twitch release party of NFT BETA
                Play-to-Earn game + 5 sol giveaway <br />
                **10 OG Minter will receive $100 in game credit
              </p>
            </div>

            <div className='roadmap__item '>
              <div className='count '>
                <h1 className='font-bold text-3xl bg-gradient-to-r  from-gradientright to-gradientleft w-12 text-center text-white rounded-full h-12 flex items-center justify-center'>
                  7
                </h1>
              </div>
              <h3 className='text-left font-bold text-white text-2xl py-6'>
                METAVERSE (Pollination Exploration) Day 21
              </h3>
              <p className='text-primary'>
                **Public Release of Needz Beez Play-to-Earn game
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
