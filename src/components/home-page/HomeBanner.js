import React from 'react'
import CategorySlider from '../global/CategorySlider'
import HomeCategeorySearch from './HomeCategeorySearch'

export default function HomeBanner() {
  return (
    <div className='home-banner-section'>
      <div className="banner-bg-image bg-[url('/images/bg.png')] bg-cover bg-no-repeat bg-center relative">
        <div className='overlay bg-black absolute top-0 left-0 right-0 bottom-0 opacity-60'></div>
        <div className='home-page-search-block relative py-24'>
          <div className='max-w-[640px] mx-auto w-full px-4'>
            <div className='title'>
              <h1 className='mb-2 text-center font-bold text-white text-[32px] md:text-5xl'>Discover the best food & drinks in India 🇮🇳</h1>
              <h5 className='mb-6 text-[#ffffff80] font-normal text-base  text-center'>Lists of top restaurants, cafes, pubs, and bars in Melbourne, based on trends</h5>
            </div>
            <div className='home-search-wrapper my-8'>
              <HomeCategeorySearch />
            </div>
            <div className='home-category-slider'>
              <CategorySlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
