import React, { useState } from 'react';

const SingleFaq = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className='FrequentlyAsked__questions mb-4'>
        <div
          className='FrequentlyAsked__question header-bg rounded flex justify-between cursor-pointer'
          onClick={() => setIsActive(!isActive)}
        >
          <p className='text-base md:text-xl font-bold text-primary '>
            {title}
          </p>
          <span>
            {isActive ? (
              <svg
                width='23'
                height='21'
                viewBox='0 0 23 21'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='text-white'
              >
                <path
                  d='M18.7165 14.0265C18.4613 14.2595 18.062 14.2807 17.7806 14.0901L17.7 14.0265L11.4999 8.36587L5.29981 14.0265C5.04464 14.2595 4.64534 14.2807 4.36396 14.0901L4.28335 14.0265C4.02818 13.7936 4.00498 13.429 4.21376 13.1721L4.28335 13.0985L10.9917 6.97346C11.2469 6.74048 11.6462 6.7193 11.9275 6.90992L12.0082 6.97346L18.7165 13.0985C18.9972 13.3547 18.9972 13.7703 18.7165 14.0265Z'
                  fill='currentColor'
                />
              </svg>
            ) : (
              <svg
                width='23'
                height='21'
                viewBox='0 0 23 21'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='text-white'
              >
                <path
                  d='M4.28352 6.97346C4.53869 6.74048 4.93799 6.7193 5.21937 6.90992L5.29998 6.97346L11.5001 12.6341L17.7002 6.97346C17.9554 6.74048 18.3547 6.7193 18.636 6.90992L18.7167 6.97346C18.9718 7.20644 18.995 7.57103 18.7862 7.82794L18.7167 7.90154L12.0083 14.0265C11.7531 14.2595 11.3538 14.2807 11.0725 14.0901L10.9918 14.0265L4.28352 7.90154C4.00283 7.64526 4.00283 7.22974 4.28352 6.97346Z'
                  fill='currentColor'
                />
              </svg>
            )}
          </span>
        </div>
        {isActive && (
          <p class='py-4 text-base font-normal md:text-lg text-white font-body'>
            {content}
          </p>
        )}
      </div>
    </>
  );
};

export default SingleFaq;
