import React from 'react';

const Footer = () => {
  return (
    <>
      <div className='py-4 border-t-[1px] border-secondary'>
        <div className='container mx-auto px-4 lg:px-0'>
          <div className='footer__wrapper flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between items-center'>
            <div className='footer__left'>
              <ul className='flex gap-16 items-center'>
                <li>
                  <a
                    href='http://discord.gg/h6Ha45SG'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <svg
                      fill='currentColor'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      className='text-primary h-10 w-10'
                      width='24px'
                      height='24px'
                    >
                      <path d='M21,23l-4.378-3.406L17,21H5c-1.105,0-2-0.895-2-2V5c0-1.105,0.895-2,2-2h14c1.105,0,2,0.895,2,2V23z M16.29,8.57	c0,0-1.23-0.95-2.68-1.06l-0.3,0.61C12.86,8.04,12.4,7.98,12,7.98c-0.41,0-0.88,0.06-1.31,0.14l-0.3-0.61	C8.87,7.66,7.71,8.57,7.71,8.57s-1.37,1.98-1.6,5.84C7.49,15.99,9.59,16,9.59,16l0.43-0.58c-0.44-0.15-0.82-0.35-1.21-0.65	l0.09-0.24c0.72,0.33,1.65,0.53,3.1,0.53s2.38-0.2,3.1-0.53l0.09,0.24c-0.39,0.3-0.77,0.5-1.21,0.65L14.41,16	c0,0,2.1-0.01,3.48-1.59C17.66,10.55,16.29,8.57,16.29,8.57z M10,13.38c-0.52,0-0.94-0.53-0.94-1.18c0-0.65,0.42-1.18,0.94-1.18	s0.94,0.53,0.94,1.18C10.94,12.85,10.52,13.38,10,13.38z M14,13.38c-0.52,0-0.94-0.53-0.94-1.18c0-0.65,0.42-1.18,0.94-1.18	s0.94,0.53,0.94,1.18C14.94,12.85,14.52,13.38,14,13.38z' />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href='https://www.instagram.com/needzbeez/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <svg
                      fill='currentColor'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      className='text-primary h-10 w-10'
                      width='24px'
                      height='24px'
                    >
                      {' '}
                      <path d='M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z' />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href='https://twitter.com/NeedzBeezNft'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <svg
                      fill='currentColor'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 30 30'
                      className='text-primary h-10 w-10'
                      width='30px'
                      height='30px'
                    >
                      {' '}
                      <path d='M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z' />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className='footer__right text-primary'>
              <p>Copyright &copy; 2021</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
